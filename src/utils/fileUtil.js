import { Exception } from 'utils';

class FileUtil {
    static readFileBinaryString = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () =>  {
                resolve(reader.result);
            };
            reader.onabort = () => { throw new Exception(Exception.TYPES.API, 'file reading was aborted'); };
            reader.onerror = () => { throw new Exception(Exception.TYPES.API, 'file reading has failed'); };
    
            reader.readAsBinaryString(file);
        });
    }
}


export default FileUtil;
