/**
 * Returns the contents of the specified file. The method returns with output relative
 * to the current shell session and does not impact the server.
 * @param {string} filename Specify a path and file name on the local file system.
 * @returns {string}
 */
function cat(filename) { return ''; }

/**
 * cd() changes the directory context of the mongo shell and has no effect on the MongoDB server.
 * @param {string} path A path on the file system local to the mongo shell context.
 */
function cd(path) {}

/**
 * For internal use.
 */
function copyDbpath() {}

/**
 * For internal use.
 * @param {string} filename A filename or path to a local file.
 */
function fuzzFile(filename) {}

/**
 * The hostname of the system running the mongo shell process.
 * @returns {string}
 */
function getHostName() { return ''; }

/**
 * Returns a document with two fields that report the amount of memory used by the JavaScript shell process.
 * The fields returned are resident and virtual.
 * @returns {{}}
 */
function getMemInfo() { return {}; }

/**
 * The hostname of the system running the mongo shell process.
 * @returns {string}
 */
function hostname() { return ''; }


function File() {
    return { 'name': '', 'baseName': '', 'isDirectory': false, 'size': 0 };
}

/**
 * Returns an array, containing one document per object in the directory.
 * This function operates in the context of the mongo shell.
 *
 * The fields included in the documents are:
 *  name A string which contains the pathname of the object.
 *  baseName A string which contains the name of the object.
 *  isDirectory A boolean to indicate whether the object is a directory.
 *  size The size of the object in bytes. This field is only present for files.
 *
 * @returns {File[]}
 */
function listFiles() { return [ new File() ]; }

/**
 * Loads and runs a JavaScript file into the current shell environment.
 * Specify filenames with relative or absolute paths. When using relative path names, confirm the current directory using the pwd() method.
 * After executing a file with load(), you may reference any functions or variables defined the file from the mongo shell environment.
 *
 * @param file {string}	Specifies the path of a JavaScript file to execute.
 */
function load(file) {}

/**
 * Returns a list of the files in the current directory.
 *
 * @returns {File[]}
 */
function ls() { return [ new File() ]; }

/**
 * Returns a md5 hash of the specified file.
 * The specified filename must refer to a file located on the system running the mongo shell.
 * @param filename
 * @returns {string}
 */
function md5sumFile(filename) { return ''; }

/**
 *
 * @param {{}} anything
 */
function print(anything) {}

/**
 *
 * @param {{}} anything
 */
function printjson(anything) {}

/**
 * Creates a directory at the specified path. This method creates the entire path specified if the
 * enclosing directory or directories do not already exit. The user running the mongo shell must have
 * permission to create directories in the specified path.
 * This method is equivalent to mkdir -p with BSD or GNU utilities.
 * @param path
 * @returns {{exists: boolean, created: boolean}}
 */
function mkdir(path) { return { "exists" : true, "created" : true } }

/**
 * Returns the current directory.
 * This function returns with output relative to the current shell session, and does not impact the server.
 * @returns {string}
 */
function pwd() { return ''; }

/**
 * Exits the current shell session.
 */
function quit() {}

/**
 * Removes the specified file from the local file system.
 * @param {string} filename A filename or path to a local file.
 */
function removeFile(filename) {}

/**
 * For internal use.
 */
function resetDbpath() {}

/**
 * Suspends a JavaScript execution context for a specified number of milliseconds.
 * @param {int} ms
 */
function sleep(ms) {}

/**
 * The setVerboseShell() method configures the mongo shell to print the duration of each operation.
 * setVerboseShell() takes one boolean parameter. Specify true or leave the parameter blank to
 * activate the verbose shell. Specify false to deactivate.
 * @param {boolean} val
 */
function setVerboseShell(val) {}

/**
 * The version of the mongo shell as a string.
 * @returns {string}
 */
function version() { return ''; }

/**
 * Returns “true” if the mongo shell is running on a system that is Windows, or “false” if the shell
 * is running on a Unix or Linux systems.
 * @private
 * @returns {boolean}
 */
function _isWindows() { return true; }

/**
 * This function provides functionality similar to the Math.rand() function from the standard library.
 * @returns {number}
 * @private
 */
function _rand() { return 0.0; }

/**
 * For internal use.
 * @private
 */
function _srand() {}