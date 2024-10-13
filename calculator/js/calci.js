//script of calculatorSecond;
function calUI()
{
	var div = document.createElement('div');
	div.style = 'border:2px solid black;height:auto;width:fit-content;margin:auto;';
	var body = document.getElementById('body');
	body.appendChild(div);
	var arr = [[7,8,9,'+'],
			   [4,5,6,'-'],
			   [1,2,3,'*'],
			   ['.',0,'=','/']];
	var table = document.createElement('table');
	var divInput = document.createElement('div');
	divInput.setAttribute('class','box');
	var row = document.createElement('tr');
	table.appendChild(row);
	var col = document.createElement('td');
	row.appendChild(col);
	var input = document.createElement('input');
	input.setAttribute('type','text');
	col.appendChild(divInput);
	var valSum = document.createElement('p');
	valSum.innerHTML = '';
	divInput.appendChild(valSum);
	divInput.appendChild(input);
	col.setAttribute('colspan','4');
	var first=0,choice,sum=0,nextVal='',total='0',flag=1;
	for(var i=0;i<arr.length;i++)
	{
		var row = document.createElement('tr');
		table.appendChild(row);
		for(var j=0;j<arr.length;j++)
		{
			var col = document.createElement('td');
			row.appendChild(col);
			var btn = document.createElement('input');
			col.appendChild(btn);
			btn.setAttribute('type','Button');
			btn.setAttribute('value',''+arr[i][j]);
			btn.setAttribute('id',''+arr[i][j]);
			btn.addEventListener('click',function(e)
			{
				input.value = input.value + e.target.value; //555+90
				nextVal += e.target.value;	
				switch(choice)
				{
					case 1:
						sum = parseFloat(nextVal) + first;
						valSum.innerHTML = ''+sum ;//sum;						
						break;
					case 2:
						sum = first - parseFloat(nextVal);
						valSum.innerHTML = ''+sum ;//sum;
						break;
					case 3:
						sum = parseFloat(nextVal) * first;
						valSum.innerHTML = ''+sum ;//sum;
						break;
					case 4:
						sum = first / parseFloat(nextVal) ;
						valSum.innerHTML = ''+sum ;//sum;
						break;
				}
				//var prevVal = input.value;
				switch(e.target.value)
				{
					case '+':
						if(flag==1)
						{
							sum = parseFloat(input.value.slice(0, -1));
							flag = 0;
						}
						first = sum //parseFloat(input.value.slice(0, -1));
						nextVal = '';
						choice = 1;
						break;
					case '-':
						if(flag==1)
						{
							sum = parseFloat(input.value.slice(0, -1));
							flag = 0;
						}
						first = sum;//parseFloat(input.value.slice(0, -1));
						nextVal = '';
						choice = 2;
						break;
					case '*':
						if(flag==1)
						{
							sum = parseFloat(input.value.slice(0, -1));
							flag = 0;
						}
						first = sum;//parseFloat(input.value.slice(0, -1));
						nextVal = '';
						choice = 3;
						break;
					case '/':
						if(flag==1)
						{
							sum = parseFloat(input.value.slice(0, -1));
							flag = 0;
						}
						first = sum;//parseFloat(input.value.slice(0, -1));
						nextVal = '';
						choice = 4;
						break;
				}
			})
		}
	}
	var row = document.createElement('tr');
	var col = document.createElement('td');
	var btnCls = document.createElement('input');
	btnCls.setAttribute('type','Button');
	btnCls.setAttribute('value','cls');
	btnCls.style = 'width:100%';
	btnCls.addEventListener('click',function()
	{
		input.value = "";
		first = 0;
		sum = 0;
		valSum.innerHTML = "";
		nextVal = '';
		flag=1;
	})
	
	table.appendChild(row);
	row.appendChild(col);
	col.appendChild(btnCls);
	col.setAttribute('colspan','4');
	div.appendChild(table);
}