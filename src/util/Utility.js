import {NativeModules, Platform} from 'react-native';
var Aes = NativeModules.Aes;

export const isvalidURL = str => {
  var pattern = new RegExp(
    '^(https?:\\/\\/)?' + // protocol
    '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|' + // domain name
    '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
    '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
    '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
      '(\\#[-a-z\\d_]*)?$',
    'i',
  ); // fragment locator
  return !!pattern.test(str);
};

export const getUniqueGroupName = () => {
  let test = encrypt(new Date().getTime().toString(), '123456');
  return test;
};

const encrypt = (text, key) => {
  return Aes.randomKey(32).then(iv => {
    return Aes.encrypt(text, key, iv).then(cipher => ({
      cipher,
      iv,
    }));
  });
};

export const decrypt = (encryptedData, key) =>
  Aes.decrypt(encryptedData.cipher, key, encryptedData.iv);
