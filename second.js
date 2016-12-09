var ans = 0;
var i = 0;
for(i = 2; i < process.argv.length; i++) {
	ans = ans + Number(process.argv[i]);
}
console.log(ans);