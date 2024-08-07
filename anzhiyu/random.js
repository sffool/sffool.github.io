var posts=["2024/08/06/Reverse/题目/DASCTF 2024/","2024/08/06/Web/题目/CTF show/","2024/08/06/Web/题目/HCTF 2nd/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };