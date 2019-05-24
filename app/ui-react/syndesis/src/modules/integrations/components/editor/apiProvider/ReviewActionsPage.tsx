import { useApiProvider } from '@syndesis/api';
import * as H from '@syndesis/history';
import {
  ApiProviderReviewActions,
  ButtonLink,
  IntegrationEditorLayout,
  PageLoader,
  PageSection,
} from '@syndesis/ui';
import { WithLoader, WithRouteData } from '@syndesis/utils';
import * as React from 'react';
import { Translation } from 'react-i18next';
import { ApiError, PageTitle } from '../../../../../shared';
import {
  IBaseApiProviderRouteParams,
  IReviewActionsRouteState,
} from '../interfaces';

export const ReviewSpecification: React.FunctionComponent<{
  specification: string;
  children: (specification: string) => any;
}> = ({ specification, children }) => {
  const [apiSummary, loading, error] = useApiProvider(specification);

  return (
    <WithLoader
      loading={loading}
      loaderChildren={<PageLoader />}
      error={error !== false}
      errorChildren={<ApiError />}
    >
      {() => (
        <>
          <ApiProviderReviewActions
            i18nApiDefinitionHeading={'API DEFINITION'}
            i18nDescriptionLabel={'Description'}
            i18nImportedHeading={'IMPORTED'}
            i18nNameLabel={'Name'}
            apiProviderDescription={apiSummary!.description}
            apiProviderName={apiSummary!.name}
            i18nOperationsHtmlMessage={`<strong>${
              apiSummary!.actionsSummary!.totalActions
            }</strong> operations`}
            i18nWarningsHeading={`WARNINGS <strong> ${
              apiSummary!.warnings!.length
            }</strong>`}
            warningMessages={apiSummary!.warnings!.map(warning => {
              return (warning as any).message;
            })}
          />
          {children(apiSummary!.configuredProperties!.specification)}
        </>
      )}
    </WithLoader>
  );
};

export interface IReviewActionsPageProps {
  cancelHref: (
    p: IBaseApiProviderRouteParams,
    s: IReviewActionsRouteState
  ) => H.LocationDescriptor;
  editHref: (
    p: IBaseApiProviderRouteParams,
    s: IReviewActionsRouteState
  ) => H.LocationDescriptor;
  nextHref: (
    p: IBaseApiProviderRouteParams,
    s: IReviewActionsRouteState
  ) => H.LocationDescriptor;
}

/**
 * This is the page where a user reviews the actions that have been
 * extracted from the API specification previously created or provided
 * earlier in the API Provider editor.
 */
export const ReviewActionsPage: React.FunctionComponent<
  IReviewActionsPageProps
> = ({ cancelHref, editHref, nextHref }) => {
  return (
    <Translation ns={['integrations', 'shared']}>
      {t => (
        <WithRouteData<IBaseApiProviderRouteParams, IReviewActionsRouteState>>
          {(params, state) => (
            <>
              <PageTitle
                title={t('integrations:apiProvider:reviewActions:title')}
              />
              <IntegrationEditorLayout
                title={t('integrations:apiProvider:reviewActions:title')}
                description={t(
                  'integrations:apiProvider:reviewActions:description'
                )}
                content={
                  <PageSection>
                    <ReviewSpecification specification={state.specification}>
                      {(specification: string) => (
                        <>
                          <ButtonLink
                            href={editHref(params, {
                              ...state,
                              specification,
                            })}
                          >
                            Review/Edit
                          </ButtonLink>
                          <ButtonLink
                            href={nextHref(params, {
                              ...state,
                              specification,
                            })}
                            as={'primary'}
                          >
                            Next
                          </ButtonLink>
                        </>
                      )}
                    </ReviewSpecification>
                  </PageSection>
                }
                cancelHref={cancelHref(params, state)}
              />
            </>
          )}
        </WithRouteData>
      )}
    </Translation>
  );
};
