declare interface IPnPListViewWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  AppLocalEnvironmentSharePoint: string;
  AppLocalEnvironmentTeams: string;
  AppSharePointEnvironment: string;
  AppTeamsTabEnvironment: string;
}

declare module 'PnPListViewWebPartStrings' {
  const strings: IPnPListViewWebPartStrings;
  export = strings;
}
