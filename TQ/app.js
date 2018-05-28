function gradient(A)
{
  const obj = {
    c: new Array(),
    a: new Array(),
    s: new Array(),
    t: new Array()
  };
  A.forEach(value => {
    if (value.x > 0 && value.y <= 0)
      obj.c.push(value.y/value.x)

    if (value.x >= 0 && value.y > 0)
      obj.a.push(value.y/value.x)

    if (value.x < 0 && value.y >= 0)
      obj.s.push(value.y/value.x)

    if (value.x <= 0 && value.y < 0)
      obj.t.push(value.y/value.x)
  });

  const arr = [...new Set(obj.c), ...new Set(obj.a), ...new Set(obj.s), ...new Set(obj.t)];
  return arr.length;
}