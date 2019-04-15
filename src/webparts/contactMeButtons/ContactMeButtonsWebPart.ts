import * as React from 'react';
import * as ReactDom from 'react-dom';
import { Version } from '@microsoft/sp-core-library';
import { BaseClientSideWebPart } from '@microsoft/sp-webpart-base';
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField
} from '@microsoft/sp-property-pane';

import * as strings from 'ContactMeButtonsWebPartStrings';
import ContactMeButtons from './components/ContactMeButtons';
import { IContactMeButtonsProps } from './components/IContactMeButtonsProps';

export interface IContactMeButtonsWebPartProps {
  email: string;
  phone: string;
  im: string;
}

export default class ContactMeButtonsWebPart extends BaseClientSideWebPart<IContactMeButtonsWebPartProps> {

  public render(): void {
    const element: React.ReactElement<IContactMeButtonsProps > = React.createElement(
      ContactMeButtons,
      {
        email: this.properties.email,
        phone: this.properties.phone,
        im: this.properties.im
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse('1.0');
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          header: {
            description: strings.PropertyPaneDescription
          },
          groups: [
            {
              groupName: strings.BasicGroupName,
              groupFields: [
                PropertyPaneTextField('email', {
                  label: strings.EmailFieldLabel
                }),
                PropertyPaneTextField('phone', {
                  label: strings.PhoneFieldLabel
                }),
                PropertyPaneTextField('im', {
                  label: strings.IMFieldLabel
                })
              ]
            }
          ]
        }
      ]
    };
  }
}
