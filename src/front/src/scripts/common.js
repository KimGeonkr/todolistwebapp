function focusInputEffect(event) {
  event.target.parentNode.classList.add('active');
}

function blurInputEffect(event) {
  if (!event.target.value) {
    event.target.parentNode.classList.remove('active');
  }
}

function isEmailFormatValid(email) {
  const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(String(email).toLowerCase());
}

function isPasswordFormatValid(passsword) {
  return passsword.length > 3;
}

function getCookie(name) {
  var results = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
  if (results) return unescape(results[2]);
  else return null;
}

function clearCookie(nameArr) {
  nameArr.forEach(name => {
    document.cookie = `${name}=; expires=Thu, 01 Jan 1970 00:00:00 UTC;`;
  });
}

function findGetParameter(parameterName) {
  let result = null;
  let tmp = [];
  location.search
    .substr(1)
    .split('&')
    .forEach(function(item) {
      tmp = item.split('=');
      if (tmp[0] === parameterName) result = decodeURIComponent(tmp[1]);
    });
  return result;
}

const labelColors = [
  'gray',
  'red',
  'orange',
  'green',
  'navy',
  'purple',
  'pink',
];

function labelClass(labelCd) {
  return labelCd == '' ? 'label--none' : `label--${labelColors[labelCd]}`;
}

export {
  focusInputEffect,
  blurInputEffect,
  isEmailFormatValid,
  isPasswordFormatValid,
  getCookie,
  clearCookie,
  findGetParameter,
  labelColors,
  labelClass,
};
