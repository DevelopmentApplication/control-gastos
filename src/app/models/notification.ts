import { ComponentRef } from '@angular/core';
import { EnumTypeNotification } from '../shared/generic.enum';

export class Notification {
  message: string;
  title: string;
  type: string;
  closeable: boolean;
  autoclose: boolean;
  timeoutAutoclose: number;
  listmessage: string[];
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
   * @param [timeoutAutoclose] indicate time in miliseconds to disapear notification @default 2500
   */
  constructor(
    message?: string,
    title?: string,
    type?: string,
    closeable?: boolean,
    autoclose?: boolean,
    timeoutAutoclose?: number
  );
  /**
   *
   * @param [message] Message to display
   * @param [title] Title of notification
   * @param [type] Notification Type @example 'default', 'success' or 'error'
   * @param [closeable] Indicates the component is closable @default is false
   * @param [autoclose] indicates if the component closes itself @default is true
   * @param [timeoutAutoclose] indicate time in miliseconds to disapear notification @default 2500
   * @param [listmessage] List of messages to enumerate
   */
  constructor(
    message?: string,
    title?: string,
    type?: string,
    closeable?: boolean,
    autoclose?: boolean,
    timeoutAutoclose?: number,
    listmessage?: string[]
  );
  constructor(
    message?: string,
    title?: string,
    type?: string,
    closeable?: boolean,
    autoclose?: boolean,
    timeoutAutoclose?: number,
    listmessage?: string[]
  ) {
    this.type = type ? type : EnumTypeNotification.DEFAULT;
    this.title = title ? title : '';
    this.message = message ? message : '';
    this.closeable = closeable ? closeable : false;
    this.autoclose = autoclose ? autoclose : true;
    this.timeoutAutoclose = timeoutAutoclose ? timeoutAutoclose : 2500;
    this.listmessage = listmessage ? listmessage : [];
  }
}

export interface INotification {
  data: Notification | undefined;
  componentRef: ComponentRef<INotification>;
}
