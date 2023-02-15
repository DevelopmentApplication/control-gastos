import { ComponentRef } from '@angular/core';

export class Alert {
  type: string;
  detail: string;
  title: string;
  listmessage: string[];
  closeable: boolean;

  /**
   * @constructor
   * @augments[type] Alert Type. @example 'default', 'success' or 'error'
   */
  constructor(type: string);
  /**
   * @constructor
   * @type Alert simple
   * @augments[type] Alert Type. @example 'default', 'success' or 'error'
   * @augments[detail] Message to display
   * @augments[closeable] Indicates the component is closable
   */
  constructor(type: string, detail?: string, closeable?: boolean);
  /**
   * @constructor
   * @type Alert with title
   * @augments[type] Alert Type. @example 'default', 'success' or 'error'
   * @augments[detail] Message to display
   * @augments[closeable] Indicates the component is closable
   * @augments[title] Title of alert
   */
  constructor(
    type: string,
    detail?: string,
    closeable?: boolean,
    title?: string
  );
  /**
   * @constructor
   * @type Alert with enumeration
   * @augments[type] Alert Type @example 'default', 'success' or 'error'
   * @augments[detail] Message to display
   * @augments[closeable] Indicates the component is closable
   * @augments[title] Title of alert
   * @augments[listmessage] List of messages to enumerate
   */
  constructor(
    type: string,
    detail?: string,
    closeable?: boolean,
    title?: string,
    listmessage?: string[]
  ) {
    if (type) {
      this.type = type;
    }
    if (title) {
      this.title = title;
    }
    if (detail) {
      this.detail = detail;
    }
    if (closeable) {
      this.closeable = closeable;
    }
    if (listmessage) {
      this.listmessage = listmessage;
    }
  }
}

export interface IAlert {
  data: Alert | undefined;
  componentRef: ComponentRef<IAlert>;
}
