import { ComponentRef } from '@angular/core';
import { TypeNotification } from '../shared/generic.enum';

export class Notification {
  type: string;
  message: string;
  title: string;
  listmessage: string[];
  closeable: boolean;
  autoclose: boolean;

  /**
   * @constructor
   */
  constructor();
  /**
   *
   * @param [message] Message to display
   */
  constructor(message?: string);
  /**
   *
   * @param [message] Message to display
   * @param [title] Title of notification
   */
  constructor(message?: string, title?: string);
  /**
   *
   * @param [message] Message to display
   * @param [title] Title of notification
   * @param [type] Notification Type @example 'default', 'success' or 'error'
   */
  constructor(message?: string, title?: string, type?: string);
  /**
   *
   * @param [message] Message to display
   * @param [title] Title of notification
   * @param [type] Notification Type @example 'default', 'success' or 'error'
   * @param [closeable] Indicates the component is closable @default is false
   */
  constructor(
    message?: string,
    title?: string,
    type?: string,
    closeable?: boolean
  );
  /**
   *
   * @param [message] Message to display
   * @param [title] Title of notification
   * @param [type] Notification Type @example 'default', 'success' or 'error'
   * @param [closeable] Indicates the component is closable @default is false
   * @param [autoclose] indicates if the component closes itself @default is true
   */
  constructor(
    message?: string,
    title?: string,
    type?: string,
    closeable?: boolean,
    autoclose?: boolean
  );
  /**
   *
   * @param [message] Message to display
   * @param [title] Title of notification
   * @param [type] Notification Type @example 'default', 'success' or 'error'
   * @param [closeable] Indicates the component is closable @default is false
   * @param [autoclose] indicates if the component closes itself @default is true
   * @param [listmessage] List of messages to enumerate
   */
  constructor(
    message?: string,
    title?: string,
    type?: string,
    closeable?: boolean,
    autoclose?: boolean,
    listmessage?: string[]
  ) {
    if (type) {
      this.type = type || TypeNotification.DEFAULT;
    }
    if (title) {
      this.title = title || '';
    }
    if (message) {
      this.message = message || '';
    }
    if (closeable) {
      this.closeable = closeable || false;
    }
    if (autoclose) {
      this.autoclose = autoclose || true;
    }
    if (listmessage) {
      this.listmessage = listmessage || [];
    }
  }
}

export interface INotification {
  data: Notification | undefined;
  componentRef: ComponentRef<INotification>;
}
