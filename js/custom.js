// 鼠标点击特效
document.addEventListener('click', function(e) {
  let spark = document.createElement('div');
  spark.className = 'spark';
  spark.style.top = e.pageY + 'px';
  spark.style.left = e.pageX + 'px';
  document.body.appendChild(spark);
  
  setTimeout(() => {
    spark.remove();
  }, 1000);
});

// 文章标题悬停特效
document.querySelectorAll('.post-title').forEach(title => {
  title.addEventListener('mouseover', () => {
    title.style.transform = 'translateX(10px)';
  });
  
  title.addEventListener('mouseout', () => {
    title.style.transform = 'translateX(0)';
  });
}); 