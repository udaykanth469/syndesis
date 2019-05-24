import {
  Text,
  TextContent,
  TextList,
  TextListItem,
  TextListItemVariants,
  TextListVariants,
  TextVariants,
  Title,
} from '@patternfly/react-core';
import { Card } from 'patternfly-react';
import * as React from 'react';
import { Container } from '../../../Layout';

import './ApiProviderReviewActions.css';

export interface IApiProviderReviewActionsProps {
  apiProviderDescription?: string;
  apiProviderName?: string;
  errorMessages?: string[];
  i18nApiDefinitionHeading: string;
  i18nDescriptionLabel: string;
  i18nErrorsHeading?: string;
  i18nImportedHeading: string;
  i18nNameLabel: string;
  i18nOperationsHtmlMessage: string;
  i18nOperationTagHtmlMessages?: string[];
  i18nValidationFallbackMessage?: string;
  i18nWarningsHeading?: string;
  warningMessages?: string[];
}

export class ApiProviderReviewActions extends React.Component<
  IApiProviderReviewActionsProps
> {
  public render() {
    return (
      <Card className={'api-provider-review-actions'}>
        <Card.Body>
          {this.props.i18nValidationFallbackMessage ? (
            <h5 className={'review-actions__validationFallbackMessage'}>
              {this.props.i18nValidationFallbackMessage}
            </h5>
          ) : (
            <TextContent>
              <Title
                headingLevel={'h5'}
                size={'md'}
                className={'review-actions__heading'}
              >
                {this.props.i18nApiDefinitionHeading}
              </Title>
              <Container>
                <TextList component={TextListVariants.dl}>
                  <TextListItem component={TextListItemVariants.dt}>
                    {this.props.i18nNameLabel}
                  </TextListItem>
                  <TextListItem component={TextListItemVariants.dd}>
                    {this.props.apiProviderName}
                  </TextListItem>
                  <TextListItem component={TextListItemVariants.dt}>
                    {this.props.i18nDescriptionLabel}
                  </TextListItem>
                  <TextListItem component={TextListItemVariants.dd}>
                    {this.props.apiProviderDescription}
                  </TextListItem>
                </TextList>
              </Container>
              <Title
                headingLevel={'h5'}
                size={'md'}
                className={'review-actions__heading'}
              >
                {this.props.i18nImportedHeading}
              </Title>
              <Container>
                <Text
                  component={TextVariants.p}
                  dangerouslySetInnerHTML={{
                    __html: this.props.i18nOperationsHtmlMessage,
                  }}
                />
              </Container>

              {/* tagged messages */}
              {this.props.i18nOperationTagHtmlMessages && (
                <TextList className={'review-actions__tagMessageList'}>
                  {this.props.i18nOperationTagHtmlMessages.map(
                    (msg: string, index: number) => (
                      <TextListItem
                        key={index}
                        dangerouslySetInnerHTML={{ __html: msg }}
                      />
                    )
                  )}
                </TextList>
              )}

              {/* error messages */}
              {this.props.i18nErrorsHeading && this.props.errorMessages && (
                <Title
                  headingLevel={'h5'}
                  size={'md'}
                  className={'review-actions__heading'}
                >
                  {this.props.i18nErrorsHeading}
                </Title>
              )}
              {this.props.errorMessages
                ? this.props.errorMessages.map(
                    (errorMsg: string, index: number) => (
                      <Text component={TextVariants.p} key={index}>
                        {index + 1}. {errorMsg}
                      </Text>
                    )
                  )
                : null}

              {/* warning messages */}
              {this.props.i18nWarningsHeading && this.props.warningMessages && (
                <Title
                  headingLevel={'h5'}
                  size={'md'}
                  className={'review-actions__heading'}
                >
                  {this.props.i18nWarningsHeading}
                </Title>
              )}
              {this.props.warningMessages
                ? this.props.warningMessages.map(
                    (warningMsg: string, index: number) => (
                      <Text key={index} component={TextVariants.p}>
                        {index + 1}. {warningMsg}
                      </Text>
                    )
                  )
                : null}
            </TextContent>
          )}
        </Card.Body>
      </Card>
    );
  }
}
