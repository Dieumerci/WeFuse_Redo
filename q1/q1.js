
var arr = [
	{
		name: 'Folder 1',
		type: 'folder',
		size: '34kb',
		children: 
		[
			{
				name: 'Folder 11',
				type: 'folder',
				size: '14kb',
				children: [
					{
						name: 'Folder 111',
						type: 'folder',
						size: '14kb',
						children: []
					},
					{
						name: 'Folder 112',
						type: 'folder',
						size: '14kb',
						children: []
					},
					{
						name: 'file113.png',
						type: 'file',
						size: '2kb'
					}
				]
			},
			{
				name: 'Folder 12',
				type: 'folder',
				size: '14kb',
				children: []
			},
			{
				name: 'Folder 13',
				type: 'folder',
				size: '14kb',
				children: [
					{
						name: 'Folder 131',
						type: 'folder',
						size: '14kb',
						children: []
					},
					{
						name: 'Folder 132',
						type: 'folder',
						size: '14kb',
						children: []
					},
					{
						name: 'file133.png',
						type: 'file',
						size: '2kb'
					}
				]
			}
		]
	},
	{
		name: 'kazadi 2',
		type: 'folder',
		size: '34kb',
		children: [
			{
				name: 'file21.png',
				type: 'file',
				size: '2kb'
			},
			{
				name: 'file22.png',
				type: 'file',
				size: '2kb'
			},
			{
				name: 'file23.png',
				type: 'file',
				size: '2kb'
			},
			{
				name: 'file24.png',
				type: 'file',
				size: '2kb'
			}
		]
	}
];
for (var folder in arr) {
  console.log("folder: " + folder);
  for (var subObj in arr[folder]) {
		
    console.log("-> " + subObj + "\n\t -->  " +  JSON.stringify(arr[folder][subObj], null, 4));
  }
}


function recursionFunc(objArray) {
    var dataObj = '';
    for(var i in objArray) {
        if (typeof objArray[i] == 'object') {
            dataObj += recursionFunc(objArray[i]);
        }else {
            dataObj += '\n\t -->  '+ objArray[i];
        }//end if
        dataObj += '\n';
    }//end for
    return dataObj;
}//en

var outputResults = recursionFunc(arr);

console.log(outputResults);



// BOTH functions do run the same you may run either or...