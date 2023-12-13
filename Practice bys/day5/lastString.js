function findFileExtension(filename){
    return filename.substring(filename.lastIndexOf('.'))
}

console.log(findFileExtension('smaple.jpg'))


function isImageFileExtension(filename){
    return (
        filename.endsWith('.png') ||
        filename.endsWith('.svg') ||
        filename.endsWith('.jpeg') ||
        filename.endsWith('.jpg') 
        )
}

console.log(isImageFileExtension('sample.jpg'))



