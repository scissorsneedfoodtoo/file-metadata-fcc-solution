
# APIs and Microservices 5: File Metadata Microservice

### User stories:
1. I can submit a form that includes a file upload.
2. The form file input field  has the "name" attribute set to "upfile". We rely on this in testing.
3. When I submit something, I will receive the file name and size in bytes within the JSON response

1. I can submit a FormData object that includes a file upload. Note: The file input field in the form has the `name` attribute set to "upfile". Don't change this as we rely on it for testing.
2. When I submit a file I will receive the file name as `name`, file type as `type`, and size in bytes as `size` within the JSON response. Example: `{ "name": "test-file", "type": "application/octet-stream", "size": 75 }`

### Usage :
* Go to the main page and upload a file using the provided form.

### Hint:
* To handle the file uploading you should use the [multer](https://www.npmjs.com/package/multer) npm package.
