!function(r){var t={};function n(e){if(t[e])return t[e].exports;var o=t[e]={i:e,l:!1,exports:{}};return r[e].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=r,n.c=t,n.d=function(r,t,e){n.o(r,t)||Object.defineProperty(r,t,{configurable:!1,enumerable:!0,get:e})},n.r=function(r){Object.defineProperty(r,"__esModule",{value:!0})},n.n=function(r){var t=r&&r.__esModule?function(){return r.default}:function(){return r};return n.d(t,"a",t),t},n.o=function(r,t){return Object.prototype.hasOwnProperty.call(r,t)},n.p="",n(n.s=0)}({0:function(r,t,n){"use strict";n(5);var e=document.querySelector(".output");!function(r){for(var t=r*r,n=[],o=0;o<r;o++)n.push(new Array(r));for(var u=0,i=0,f=["right","bottom","left","top"],a=0,c=f[a],o=0;o<t;o++){n[i]&&void 0===n[i][u]&&(n[i][u]=o+1);var l={x:u,y:i};if("right"===c){var p=n[l.y][l.x+1];u<r-1&&void 0===p?l.x++:(x(),l.y++)}else if("bottom"===c){var v=null;n[l.y+1]&&(v=n[l.y+1][l.x]),i<r-1&&void 0===v?l.y++:(x(),l.x--)}else if("left"===c){var s=n[l.y][l.x-1];u>0&&void 0===s?l.x--:(x(),l.y--)}else if("top"===c){var y=n[l.y-1][l.x];i>0&&void 0===y?l.y--:(x(),l.x++)}u=l.x,i=l.y}function x(){a===f.length-1?a=0:a++,c=f[a]}!function(r){var t=r.map(function(r){var t=r.map(function(r){return"<span>"+r+"</span>"});return t.join(" ")});t=t.join("<br>"),e.innerHTML=t}(n)}(4)},5:function(r,t){}});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vc3JjL2luZGV4LmpzIl0sIm5hbWVzIjpbImluc3RhbGxlZE1vZHVsZXMiLCJfX3dlYnBhY2tfcmVxdWlyZV9fIiwibW9kdWxlSWQiLCJleHBvcnRzIiwibW9kdWxlIiwiaSIsImwiLCJtb2R1bGVzIiwiY2FsbCIsIm0iLCJjIiwiZCIsIm5hbWUiLCJnZXR0ZXIiLCJvIiwiT2JqZWN0IiwiZGVmaW5lUHJvcGVydHkiLCJjb25maWd1cmFibGUiLCJlbnVtZXJhYmxlIiwiZ2V0IiwiciIsInZhbHVlIiwibiIsIl9fZXNNb2R1bGUiLCJvYmplY3QiLCJwcm9wZXJ0eSIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwicCIsInMiLCJvdXRwdXRFbGVtIiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIiwibWF4SW5Sb3ciLCJtYXhUb3RhbCIsImFyciIsInB1c2giLCJBcnJheSIsIngiLCJ5IiwiZGlyZWN0aW9ucyIsImRpcmVjdGlvbkluZGV4IiwiZGlyZWN0aW9uIiwidW5kZWZpbmVkIiwibmV4dENvb3JkcyIsIm5leHQiLCJjaGFuZ2VEaXJlY3Rpb24iLCJsZW5ndGgiLCJsaXN0IiwibWFwIiwiaXRlbSIsInJvdyIsInJvd0l0ZW0iLCJqb2luIiwiaW5uZXJIVE1MIiwicHJpbnRPdXRwdXQiLCJtYWtlU25haWwiXSwibWFwcGluZ3MiOiJhQUNBLElBQUFBLEtBR0EsU0FBQUMsRUFBQUMsR0FHQSxHQUFBRixFQUFBRSxHQUNBLE9BQUFGLEVBQUFFLEdBQUFDLFFBR0EsSUFBQUMsRUFBQUosRUFBQUUsSUFDQUcsRUFBQUgsRUFDQUksR0FBQSxFQUNBSCxZQVVBLE9BTkFJLEVBQUFMLEdBQUFNLEtBQUFKLEVBQUFELFFBQUFDLElBQUFELFFBQUFGLEdBR0FHLEVBQUFFLEdBQUEsRUFHQUYsRUFBQUQsUUFLQUYsRUFBQVEsRUFBQUYsRUFHQU4sRUFBQVMsRUFBQVYsRUFHQUMsRUFBQVUsRUFBQSxTQUFBUixFQUFBUyxFQUFBQyxHQUNBWixFQUFBYSxFQUFBWCxFQUFBUyxJQUNBRyxPQUFBQyxlQUFBYixFQUFBUyxHQUNBSyxjQUFBLEVBQ0FDLFlBQUEsRUFDQUMsSUFBQU4sS0FNQVosRUFBQW1CLEVBQUEsU0FBQWpCLEdBQ0FZLE9BQUFDLGVBQUFiLEVBQUEsY0FBaURrQixPQUFBLEtBSWpEcEIsRUFBQXFCLEVBQUEsU0FBQWxCLEdBQ0EsSUFBQVMsRUFBQVQsS0FBQW1CLFdBQ0EsV0FBMkIsT0FBQW5CLEVBQUEsU0FDM0IsV0FBaUMsT0FBQUEsR0FFakMsT0FEQUgsRUFBQVUsRUFBQUUsRUFBQSxJQUFBQSxHQUNBQSxHQUlBWixFQUFBYSxFQUFBLFNBQUFVLEVBQUFDLEdBQXNELE9BQUFWLE9BQUFXLFVBQUFDLGVBQUFuQixLQUFBZ0IsRUFBQUMsSUFHdER4QixFQUFBMkIsRUFBQSxHQUlBM0IsSUFBQTRCLEVBQUEsb0NDbkVBNUIsRUFBQSxHQUNBLElBQU02QixFQUFhQyxTQUFTQyxjQUFjLFlBSTFDLFNBQW1CQyxHQUlmLElBSEEsSUFBSUMsRUFBV0QsRUFBV0EsRUFDdEJFLEtBRUs5QixFQUFJLEVBQUdBLEVBQUk0QixFQUFVNUIsSUFDMUI4QixFQUFJQyxLQUFLLElBQUlDLE1BQU1KLElBU3ZCLElBTkEsSUFBSUssRUFBSSxFQUNKQyxFQUFJLEVBQ0ZDLEdBQWMsUUFBUyxTQUFVLE9BQVEsT0FDM0NDLEVBQWlCLEVBQ2pCQyxFQUFZRixFQUFXQyxHQUVuQnBDLEVBQUksRUFBR0EsRUFBSTZCLEVBQVU3QixJQUFNLENBQzVCOEIsRUFBSUksU0FBb0JJLElBQWRSLEVBQUlJLEdBQUdELEtBQ2hCSCxFQUFJSSxHQUFHRCxHQUFLakMsRUFBSSxHQUdwQixJQUFJdUMsR0FDQU4sRUFBR0EsRUFDSEMsRUFBR0EsR0FHUCxHQUFrQixVQUFkRyxFQUF1QixDQUN2QixJQUFJRyxFQUFPVixFQUFJUyxFQUFXTCxHQUFHSyxFQUFXTixFQUFJLEdBRXhDQSxFQUFJTCxFQUFXLFFBQWNVLElBQVRFLEVBQ3BCRCxFQUFXTixLQUdYUSxJQUNBRixFQUFXTCxVQUdkLEdBQWlCLFdBQWRHLEVBQXdCLENBQzVCLElBQUlHLEVBQU8sS0FDUFYsRUFBSVMsRUFBV0wsRUFBSSxLQUNuQk0sRUFBT1YsRUFBSVMsRUFBV0wsRUFBSSxHQUFHSyxFQUFXTixJQUd4Q0MsRUFBSU4sRUFBVyxRQUFjVSxJQUFURSxFQUNwQkQsRUFBV0wsS0FHWE8sSUFDQUYsRUFBV04sVUFHZCxHQUFpQixTQUFkSSxFQUFzQixDQUMxQixJQUFJRyxFQUFPVixFQUFJUyxFQUFXTCxHQUFHSyxFQUFXTixFQUFJLEdBRXhDQSxFQUFJLFFBQWNLLElBQVRFLEVBQ1RELEVBQVdOLEtBR1hRLElBQ0FGLEVBQVdMLFVBR2QsR0FBaUIsUUFBZEcsRUFBcUIsQ0FDekIsSUFBSUcsRUFBT1YsRUFBSVMsRUFBV0wsRUFBSSxHQUFHSyxFQUFXTixHQUV4Q0MsRUFBSSxRQUFjSSxJQUFURSxFQUNURCxFQUFXTCxLQUdYTyxJQUNBRixFQUFXTixLQUluQkEsRUFBSU0sRUFBV04sRUFDZkMsRUFBSUssRUFBV0wsRUFLbkIsU0FBU08sSUFDREwsSUFBbUJELEVBQVdPLE9BQVEsRUFDdENOLEVBQWlCLEVBR2pCQSxJQUVKQyxFQUFZRixFQUFXQyxJQUkvQixTQUFxQk4sR0FDakIsSUFBSWEsRUFBT2IsRUFBSWMsSUFBSSxTQUFBQyxHQUNmLElBQUlDLEVBQU1ELEVBQUtELElBQUksU0FBQUcsR0FDZixlQUFnQkEsRUFBaEIsWUFFSixPQUFPRCxFQUFJRSxLQUFLLE9BRXBCTCxFQUFPQSxFQUFLSyxLQUFLLFFBRWpCdkIsRUFBV3dCLFVBQVlOLEVBdEJ2Qk8sQ0FBWXBCLEdBOUVoQnFCLENBQVUiLCJmaWxlIjoibWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwge1xuIFx0XHRcdFx0Y29uZmlndXJhYmxlOiBmYWxzZSxcbiBcdFx0XHRcdGVudW1lcmFibGU6IHRydWUsXG4gXHRcdFx0XHRnZXQ6IGdldHRlclxuIFx0XHRcdH0pO1xuIFx0XHR9XG4gXHR9O1xuXG4gXHQvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSBmdW5jdGlvbihleHBvcnRzKSB7XG4gXHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCAnX19lc01vZHVsZScsIHsgdmFsdWU6IHRydWUgfSk7XG4gXHR9O1xuXG4gXHQvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5uID0gZnVuY3Rpb24obW9kdWxlKSB7XG4gXHRcdHZhciBnZXR0ZXIgPSBtb2R1bGUgJiYgbW9kdWxlLl9fZXNNb2R1bGUgP1xuIFx0XHRcdGZ1bmN0aW9uIGdldERlZmF1bHQoKSB7IHJldHVybiBtb2R1bGVbJ2RlZmF1bHQnXTsgfSA6XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0TW9kdWxlRXhwb3J0cygpIHsgcmV0dXJuIG1vZHVsZTsgfTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgJ2EnLCBnZXR0ZXIpO1xuIFx0XHRyZXR1cm4gZ2V0dGVyO1xuIFx0fTtcblxuIFx0Ly8gT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm8gPSBmdW5jdGlvbihvYmplY3QsIHByb3BlcnR5KSB7IHJldHVybiBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqZWN0LCBwcm9wZXJ0eSk7IH07XG5cbiBcdC8vIF9fd2VicGFja19wdWJsaWNfcGF0aF9fXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIlwiO1xuXG5cbiBcdC8vIExvYWQgZW50cnkgbW9kdWxlIGFuZCByZXR1cm4gZXhwb3J0c1xuIFx0cmV0dXJuIF9fd2VicGFja19yZXF1aXJlX18oX193ZWJwYWNrX3JlcXVpcmVfXy5zID0gMCk7XG4iLCJpbXBvcnQgJy4vc3R5bGVzLmNzcyc7XG5jb25zdCBvdXRwdXRFbGVtID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm91dHB1dCcpO1xuXG5tYWtlU25haWwoNCk7XG5cbmZ1bmN0aW9uIG1ha2VTbmFpbChtYXhJblJvdykge1xuICAgIHZhciBtYXhUb3RhbCA9IG1heEluUm93ICogbWF4SW5Sb3c7XG4gICAgdmFyIGFyciA9IFtdO1xuXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBtYXhJblJvdzsgaSsrKSB7XG4gICAgICAgIGFyci5wdXNoKG5ldyBBcnJheShtYXhJblJvdykpO1xuICAgIH1cblxuICAgIGxldCB4ID0gMDtcbiAgICBsZXQgeSA9IDA7XG4gICAgY29uc3QgZGlyZWN0aW9ucyA9IFsncmlnaHQnLCAnYm90dG9tJywgJ2xlZnQnLCAndG9wJ107XG4gICAgbGV0IGRpcmVjdGlvbkluZGV4ID0gMDtcbiAgICBsZXQgZGlyZWN0aW9uID0gZGlyZWN0aW9uc1tkaXJlY3Rpb25JbmRleF07XG5cbiAgICBmb3IodmFyIGkgPSAwOyBpIDwgbWF4VG90YWw7IGkgKyspIHtcbiAgICAgICAgaWYoYXJyW3ldICYmIGFyclt5XVt4XSA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICBhcnJbeV1beF0gPSBpICsgMTtcbiAgICAgICAgfVxuXG4gICAgICAgIGxldCBuZXh0Q29vcmRzID0ge1xuICAgICAgICAgICAgeDogeCxcbiAgICAgICAgICAgIHk6IHlcbiAgICAgICAgfTtcblxuICAgICAgICBpZiAoZGlyZWN0aW9uID09PSAncmlnaHQnKSB7XG4gICAgICAgICAgICBsZXQgbmV4dCA9IGFycltuZXh0Q29vcmRzLnldW25leHRDb29yZHMueCArIDFdO1xuXG4gICAgICAgICAgICBpZiAoeCA8IG1heEluUm93IC0gMSAmJiBuZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBuZXh0Q29vcmRzLngrKztcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoYW5nZURpcmVjdGlvbigpO1xuICAgICAgICAgICAgICAgIG5leHRDb29yZHMueSsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIGVsc2UgaWYoZGlyZWN0aW9uID09PSAnYm90dG9tJykge1xuICAgICAgICAgICAgbGV0IG5leHQgPSBudWxsO1xuICAgICAgICAgICAgaWYgKGFycltuZXh0Q29vcmRzLnkgKyAxXSkge1xuICAgICAgICAgICAgICAgIG5leHQgPSBhcnJbbmV4dENvb3Jkcy55ICsgMV1bbmV4dENvb3Jkcy54XTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHkgPCBtYXhJblJvdyAtIDEgJiYgbmV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbmV4dENvb3Jkcy55Kys7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VEaXJlY3Rpb24oKTtcbiAgICAgICAgICAgICAgICBuZXh0Q29vcmRzLngtLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGRpcmVjdGlvbiA9PT0gJ2xlZnQnKSB7XG4gICAgICAgICAgICBsZXQgbmV4dCA9IGFycltuZXh0Q29vcmRzLnldW25leHRDb29yZHMueCAtIDFdO1xuXG4gICAgICAgICAgICBpZiAoeCA+IDAgJiYgbmV4dCA9PT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgICAgbmV4dENvb3Jkcy54LS07XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgICAgICBjaGFuZ2VEaXJlY3Rpb24oKTtcbiAgICAgICAgICAgICAgICBuZXh0Q29vcmRzLnktLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBlbHNlIGlmKGRpcmVjdGlvbiA9PT0gJ3RvcCcpIHtcbiAgICAgICAgICAgIGxldCBuZXh0ID0gYXJyW25leHRDb29yZHMueSAtIDFdW25leHRDb29yZHMueF07XG5cbiAgICAgICAgICAgIGlmICh5ID4gMCAmJiBuZXh0ID09PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgICBuZXh0Q29vcmRzLnktLTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2Uge1xuICAgICAgICAgICAgICAgIGNoYW5nZURpcmVjdGlvbigpO1xuICAgICAgICAgICAgICAgIG5leHRDb29yZHMueCsrO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgeCA9IG5leHRDb29yZHMueDtcbiAgICAgICAgeSA9IG5leHRDb29yZHMueTtcbiAgICB9XG5cbiAgICBwcmludE91dHB1dChhcnIpO1xuXG4gICAgZnVuY3Rpb24gY2hhbmdlRGlyZWN0aW9uKCkge1xuICAgICAgICBpZiAoZGlyZWN0aW9uSW5kZXggPT09IGRpcmVjdGlvbnMubGVuZ3RoIC0xKSB7XG4gICAgICAgICAgICBkaXJlY3Rpb25JbmRleCA9IDBcbiAgICAgICAgfVxuICAgICAgICBlbHNlIHtcbiAgICAgICAgICAgIGRpcmVjdGlvbkluZGV4Kys7XG4gICAgICAgIH1cbiAgICAgICAgZGlyZWN0aW9uID0gZGlyZWN0aW9uc1tkaXJlY3Rpb25JbmRleF07XG4gICAgfVxufVxuXG5mdW5jdGlvbiBwcmludE91dHB1dChhcnIpIHtcbiAgICB2YXIgbGlzdCA9IGFyci5tYXAoaXRlbSA9PiB7XG4gICAgICAgIHZhciByb3cgPSBpdGVtLm1hcChyb3dJdGVtID0+IHtcbiAgICAgICAgICAgIHJldHVybiBgPHNwYW4+JHtyb3dJdGVtfTwvc3Bhbj5gO1xuICAgICAgICB9KTtcbiAgICAgICAgcmV0dXJuIHJvdy5qb2luKCcgJyk7XG4gICAgfSk7XG4gICAgbGlzdCA9IGxpc3Quam9pbignPGJyPicpO1xuXG4gICAgb3V0cHV0RWxlbS5pbm5lckhUTUwgPSBsaXN0O1xufVxuIl0sInNvdXJjZVJvb3QiOiIifQ==