interface AppConfigInterface {
  ownerRoles: string[];
  customerRoles: string[];
  tenantRoles: string[];
  tenantName: string;
  applicationName: string;
  addOns: string[];
}
export const appConfig: AppConfigInterface = {
  ownerRoles: ['Administrator'],
  customerRoles: [],
  tenantRoles: ['Owner', 'Administrator', 'Technical Support'],
  tenantName: 'Organization',
  applicationName: 'Provedor',
  addOns: ['chat', 'file', 'notifications'],
};
