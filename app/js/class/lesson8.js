// 这里的对象是Object对象，不是class的对象

console.log('--------简洁表示法--------');

{
  // 简洁表示法
  let o=1;
  let k=2;
  let es5={
    o:o,
    k:k
  };
  let es6={
    o,
    k
  };
  console.log('es5', es5);
  console.log('es6', es6);

  let es5_method={
    hello:function(){
      console.log('hello');
    }
  };
  let es6_method={
    hello(){
      console.log('hello');
    }
  };
  console.log('es5_method.hello()');
  es5_method.hello();
  console.log('es6_method.hello()');
  es6_method.hello();
}

console.log('--------属性表达式--------');

{
  // 属性表达式
  let a='b';
  let es5_obj={
    a:'c',
    b:'c'
  };

  let es6_obj={
    [a]:'c'
  };

  console.log('es5_obj', es5_obj);
  console.log('es6_obj', es6_obj);

}

console.log('--------新增api--------');

{
  // 新增API

  console.log('判断是否相等');

  console.log('字符串',Object.is('abc','abc'),'abc'==='abc');
  console.log('数组',Object.is([],[]),[]===[]);

  console.log('拷贝',Object.assign({a:'a'},{b:'b'})); // 拷贝的属性是有限制的，这个拷贝是浅拷贝，即如果拷贝的是引用类型，则拷贝的是地址，而不是复制新的值

  let test={k:123,o:456};
  for(let [key,value] of Object.entries(test)){
    console.log([key,value]);
  }
}

{
  // 扩展运算符
  // let {a,b,...c}={a:'test',b:'kill',c:'ddd',d:'ccc'};
  // c={
  //   c:'ddd',
  //   d:'ccc'
  // }
}
