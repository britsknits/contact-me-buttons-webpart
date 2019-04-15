import * as React from 'react';
import styles from './ContactMeButtons.module.scss';
import { css, classNamesFunction } from 'office-ui-fabric-react/lib/Utilities';
import { IContactMeButtonsProps } from './IContactMeButtonsProps';
import { ActionButton} from '@microsoft/office-ui-fabric-react-bundle';
import { escape } from '@microsoft/sp-lodash-subset';
import { Icon } from 'office-ui-fabric-react/lib/Icon';

export default class ContactMeButtons extends React.Component<IContactMeButtonsProps, {}> {
  public render(): React.ReactElement<IContactMeButtonsProps> {
    return (
      <div className="${ContactMeButtons}">
        <div className="${ styles.container }">
          <div className="${ styles.row }">
            <div className="${ styles.column }">
             
              <a href="mailto:{this.props.email}" className="${ styles.button }">
                <span className="${ styles.label }"><Icon iconName="Mail" />{this.props.email}</span>
              </a>
              
            </div>
            <div className= { styles.column }>
       <a href="im://${ this.props.im} " className="${ styles.button }">
          <span className="${ styles.label }"><Icon iconName="Message" /> {this.props.im}</span>
       </a>

     </div>
     <div className= { styles.column }>
         <a href="sip://${ this.props.phone} " className="${ styles.button }">
                <span className="${ styles.label }"><Icon iconName="Phone" /> {this.props.phone}</span>
          </a>
       </div>  
          </div>
        </div>
      </div>
    );
  }
}


