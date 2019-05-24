import * as React from 'react';
import { Route, Switch } from 'react-router';
import { IEditSpecificationPageProps } from './apiProvider/EditSpecificationPage';
import { IReviewActionsPageProps } from './apiProvider/ReviewActionsPage';
import { ReviewOperationsPage } from './apiProvider/ReviewOperationsPage';
import { SelectMethodPage } from './apiProvider/SelectMethodPage';
import { SetInfoPage } from './apiProvider/SetInfoPage';
import { IDataMapperPageProps } from './dataMapper/DataMapperPage';
import { ConfigureActionPage } from './endpoint/ConfigureActionPage';
import { DescribeDataShapePage } from './endpoint/DescribeDataShapePage';
import { SelectActionPage } from './endpoint/SelectActionPage';
import { TemplateStepPage } from './template/TemplateStepPage';

export interface IEndpointEditorAppProps {
  selectActionPath: string;
  selectActionChildren: React.ReactElement<SelectActionPage>;
  configureActionPath: string;
  configureActionChildren: React.ReactElement<ConfigureActionPage>;
  describeDataPath: string;
  describeDataChildren: React.ReactElement<DescribeDataShapePage>;
}
export const EndpointEditorApp: React.FunctionComponent<
  IEndpointEditorAppProps
> = props => {
  return (
    <Switch>
      <Route
        path={props.selectActionPath}
        exact={true}
        children={props.selectActionChildren}
      />
      <Route
        path={props.configureActionPath}
        exact={true}
        children={props.configureActionChildren}
      />
      <Route
        path={props.describeDataPath}
        exact={true}
        children={props.describeDataChildren}
      />
    </Switch>
  );
};

export interface IApiProviderAppProps {
  selectMethodPath: string;
  selectMethodChildren: React.ReactElement<SelectMethodPage>;
  reviewActionsPath: string;
  reviewActionsChildren: React.ReactElement<IReviewActionsPageProps>;
  editSpecificationPath: string;
  editSpecificationChildren: React.ReactElement<IEditSpecificationPageProps>;
  setInfoPath: string;
  setInfoChildren: React.ReactElement<SetInfoPage>;
  reviewOperationsPath: string;
  reviewOperationsChildren: React.ReactElement<ReviewOperationsPage>;
}
export const ApiProviderApp: React.FunctionComponent<
  IApiProviderAppProps
> = props => {
  return (
    <Switch>
      <Route
        path={props.selectMethodPath}
        exact={true}
        children={props.selectMethodChildren}
      />
      <Route
        path={props.reviewActionsPath}
        exact={true}
        children={props.reviewActionsChildren}
      />
      <Route
        path={props.editSpecificationPath}
        exact={true}
        children={props.editSpecificationChildren}
      />
      <Route
        path={props.setInfoPath}
        exact={true}
        children={props.setInfoChildren}
      />
      <Route
        path={props.reviewOperationsPath}
        exact={true}
        children={props.reviewOperationsChildren}
      />
    </Switch>
  );
};

export interface ITemplateAppProps {
  templatePath: string;
  templateChildren: React.ReactElement<TemplateStepPage>;
}
export const TemplateApp: React.FunctionComponent<
  ITemplateAppProps
> = props => {
  return (
    <Switch>
      <Route
        path={props.templatePath}
        exact={true}
        children={props.templateChildren}
      />
    </Switch>
  );
};

export interface IBasicFilterAppProps {
  basicFilterPath: string;
  basicFilterChildren: React.ReactElement<IBasicFilterAppProps>;
}
export const BasicFilterApp: React.FunctionComponent<
  IBasicFilterAppProps
> = props => {
  return (
    <Switch>
      <Route
        path={props.basicFilterPath}
        exact={true}
        children={props.basicFilterChildren}
      />
    </Switch>
  );
};

export interface IDataMapperAppProps {
  mapperPath: string;
  mapperChildren: React.ReactElement<IDataMapperPageProps>;
}
export const DataMapperApp: React.FunctionComponent<
  IDataMapperAppProps
> = props => {
  return (
    <Switch>
      <Route
        path={props.mapperPath}
        exact={true}
        children={props.mapperChildren}
      />
    </Switch>
  );
};

export interface IStepAppProps {
  configurePath: string;
  configureChildren: React.ReactNode;
}
export const StepApp: React.FunctionComponent<IStepAppProps> = props => {
  return (
    <Switch>
      <Route
        path={props.configurePath}
        exact={true}
        children={props.configureChildren}
      />
    </Switch>
  );
};

export interface IExtensionAppProps {
  configurePath: string;
  configureChildren: React.ReactNode;
}
export const ExtensionApp: React.FunctionComponent<
  IExtensionAppProps
> = props => {
  return (
    <Switch>
      <Route
        path={props.configurePath}
        exact={true}
        children={props.configureChildren}
      />
    </Switch>
  );
};

export interface IEditorAppProps {
  selectStepPath?: string;
  selectStepChildren?: React.ReactNode;
  endpointEditor: IEndpointEditorAppProps;
  apiProvider: IApiProviderAppProps;
  template: ITemplateAppProps;
  dataMapper: IDataMapperAppProps;
  basicFilter: IBasicFilterAppProps;
  step: IStepAppProps;
  extension: IExtensionAppProps;
}
export const EditorRoutes: React.FunctionComponent<IEditorAppProps> = props => {
  return (
    <Switch>
      {props.selectStepPath && props.selectStepChildren ? (
        <Route
          path={props.selectStepPath}
          exact={true}
          children={props.selectStepChildren}
        />
      ) : null}

      <Route path={props.endpointEditor.selectActionPath}>
        <EndpointEditorApp
          selectActionPath={props.endpointEditor.selectActionPath}
          selectActionChildren={props.endpointEditor.selectActionChildren}
          configureActionPath={props.endpointEditor.configureActionPath}
          configureActionChildren={props.endpointEditor.configureActionChildren}
          describeDataPath={props.endpointEditor.describeDataPath}
          describeDataChildren={props.endpointEditor.describeDataChildren}
        />
      </Route>
      <Route path={props.apiProvider.selectMethodPath}>
        <ApiProviderApp
          selectMethodPath={props.apiProvider.selectMethodPath}
          selectMethodChildren={props.apiProvider.selectMethodChildren}
          reviewActionsPath={props.apiProvider.reviewActionsPath}
          reviewActionsChildren={props.apiProvider.reviewActionsChildren}
          editSpecificationPath={props.apiProvider.editSpecificationPath}
          editSpecificationChildren={
            props.apiProvider.editSpecificationChildren
          }
          setInfoPath={props.apiProvider.setInfoPath}
          setInfoChildren={props.apiProvider.setInfoChildren}
          reviewOperationsPath={props.apiProvider.reviewOperationsPath}
          reviewOperationsChildren={props.apiProvider.reviewOperationsChildren}
        />
      </Route>
      <Route path={props.template.templatePath}>
        <TemplateApp
          templatePath={props.template.templatePath}
          templateChildren={props.template.templateChildren}
        />
      </Route>
      <Route path={props.dataMapper.mapperPath}>
        <DataMapperApp
          mapperPath={props.dataMapper.mapperPath}
          mapperChildren={props.dataMapper.mapperChildren}
        />
      </Route>
      <Route path={props.basicFilter.basicFilterPath}>
        <BasicFilterApp
          basicFilterPath={props.basicFilter.basicFilterPath}
          basicFilterChildren={props.basicFilter.basicFilterChildren}
        />
      </Route>
      <Route path={props.step.configurePath}>
        <StepApp
          configurePath={props.step.configurePath}
          configureChildren={props.step.configureChildren}
        />
      </Route>
      <Route path={props.extension.configurePath}>
        <ExtensionApp
          configurePath={props.extension.configurePath}
          configureChildren={props.extension.configureChildren}
        />
      </Route>
    </Switch>
  );
};
