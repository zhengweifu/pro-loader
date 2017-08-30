import loaderUtils from 'loader-utils';
console.log(loaderUtils);
export default (content, map) => {
	const options =  loaderUtils.getOptions(this) || {};
	const subKeys = options.subKeys || {};
	const imageKeys = subKeys.image || ['imagePath'];
	const codeKeys = subKeys.code || ['scriptPath'];
	console.log(content, imageKeys, codeKeys, this.context);
	const datas = JSON.parse(content);
	// for(let data of datas ) {
	// 	for(let eachKey in data) {

	// 	}
	// }
	const newDatas = datas.map((data, index) => {
		let mData = data;
		for(let eachKey in data) {
			if(imageKeys.indexOf(eachKey) !== -1) {
				console.log(data[imageKeys]);
			} else if(codeKeys.indexOf(eachKey) !== -1) {

			}
		}
	});

	return '';
};