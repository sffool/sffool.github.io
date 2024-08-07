var posts=["2024/08/06/CTF show/","2024/08/06/DASCTF 2024/","2024/08/06/HCTF 2nd/"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };