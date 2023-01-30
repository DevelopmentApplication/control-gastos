export class Alert {
  show: boolean;
  type: string;
  detail: string;
  title: string;
  listmessage: string[];
  icon: boolean;
  closeable: boolean;

  /**
   * @constructor
   * @augments[show] component visibility
   */
  constructor(show: boolean);
  /**
   * @constructor
   * @type Alert simple
   * @augments[show] Component visibility
   * @augments[type] Alert Type. @example 'default', 'success' or 'error'
   * @augments[detail] Message to display
   * @augments[closeable] Indicates the component is closable
   */
  constructor(
    show: boolean,
    type?: string,
    detail?: string,
    closeable?: boolean
  );
  /**
   * @constructor
   * @type Alert with title
   * @augments[show] Component visibility
   * @augments[type] Alert Type. @example 'default', 'success' or 'error'
   * @augments[detail] Message to display
   * @augments[closeable] Indicates the component is closable
   * @augments[title] Title of alert
   */
  constructor(
    show: boolean,
    type?: string,
    detail?: string,
    closeable?: boolean,
    title?: string
  );
  /**
   * @constructor
   * @type Alert with enumeration
   * @augments[show] Component visibility
   * @augments[type] Alert Type @example 'default', 'success' or 'error'
   * @augments[detail] Message to display
   * @augments[closeable] Indicates the component is closable
   * @augments[title] Title of alert
   * @augments[listmessage] List of messages to enumerate
   */
  constructor(
    show: boolean,
    type?: string,
    detail?: string,
    closeable?: boolean,
    title?: string,
    listmessage?: string[]
  ) {
    this.show = show;

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
  show: boolean;
  type: string;
  detail?: string;
  title?: string;
  listmessage?: string[];
  icon?: boolean;
  closeable?: boolean;
}
