import Realm from 'realm';

export const getRealmApp = () => {
  const appId = '<enter your Realm app ID here>';
  const appConfig = {
    id: appId,
    timeout: 10000,
  };
  return new Realm.App(appConfig);
};
