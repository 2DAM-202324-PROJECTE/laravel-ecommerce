import{d as y,A as F,o as i,c as P,w as c,a as e,b as r,u as a,i as v,g as u,j as $,k as p,v as x,l as S,e as n,h as f,F as h,t as _,O as A}from"./app-JsxQVuK5.js";import{_ as D}from"./AdminLayout-yxQSrgni.js";import{P as L,N as I,a as G,S as O}from"./pagination-5pq2a43H.js";import{r as R,a as k}from"./HomeIcon-tNaSnbDF.js";import{r as H}from"./PhotoIcon-B30MP_vc.js";import{r as J}from"./PlusIcon-D7nkZKuz.js";import"./HomeIcon-CX7JyigJ.js";import"./transition-DM51IVFY.js";import"./keyboard-B1eEn8PW.js";import"./ChevronDownIcon-BFJJcEZk.js";import"./micro-task-BhIf1XMT.js";import"./Bars3Icon-CiW0Tf8T.js";const Q={class:"mx-4 mt-4 mb-14"},q={class:"flex","aria-label":"Breadcrumb"},z={role:"list",class:"flex items-center space-x-4"},K=e("span",{class:"sr-only"},"Home",-1),W={class:"flex items-center"},X={class:"flex items-center"},Y={class:"flex items-center"},Z={class:"mt-4 mx-4"},ee={class:"bg-white p-6 rounded-2xl border-b shadow-2xl"},te={class:"flex justify-center px-4 py-8"},se={class:"w-full max-w-4xl mx-auto bg-white p-8"},oe=e("div",{class:"mb-8"},[e("h1",{class:"text-2xl font-bold text-gray-700 mb-1 text-center"}," Add a New Product "),e("p",{class:"text-gray-600 text-sm text-center"}," Complete the form below to list a new product in your store. ")],-1),le=e("label",{for:"name",class:"block text-base font-bold text-gray-900"},"Product Name",-1),ae=e("label",{for:"description",class:"block text-base font-bold text-gray-900"},"Description",-1),ie={class:"md:flex md:gap-6 md:items-end"},re={class:"md:w-1/2"},ne=e("label",{for:"price",class:"block text-base font-bold text-gray-900"},"Price",-1),de={class:"md:w-1/2"},ce=e("label",{for:"stock",class:"block text-base font-bold text-gray-900"},"Stock",-1),ue=e("label",{for:"categories",class:"block text-base font-bold text-gray-900"},"Categories",-1),pe={class:"my-4 p-4 bg-white border border-gray-200 rounded-lg shadow"},me={class:"flex items-center"},ge=e("option",{disabled:"",value:""},"Select a category",-1),fe=["value"],he={class:"flex flex-wrap gap-2 mt-4"},be=["onClick"],ve=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),xe=[ve],_e=e("label",{for:"tags",class:"block text-base font-medium text-gray-900"},"Tags",-1),we={class:"my-4 p-4 bg-white border border-gray-200 rounded-lg shadow"},ye={class:"flex items-center"},ke=e("option",{disabled:"",value:""},"Select a tag",-1),Ce=["value"],Pe={class:"flex flex-wrap gap-2 mt-4"},Se=["onClick"],Ae=e("svg",{xmlns:"http://www.w3.org/2000/svg",class:"h-3 w-3",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),Be=[Ae],Me={class:"col-span-full"},Te=e("label",{for:"cover-photo",class:"block text-base font-bold leading-6 text-gray-900"},"Photo",-1),Ve={class:"my-4 flex justify-center rounded-lg border border-dashed border-gray-900/25 px-6 py-10"},je={class:"text-center"},Ee={class:"mt-4 flex text-sm leading-6 text-gray-600"},Ne={for:"images",class:"relative cursor-pointer rounded-md bg-white font-bold text-blue-600 focus-within:outline-none focus-within:ring-2 focus-within:ring-blue-600 focus-within:ring-offset-2 hover:text-blue-500"},Ue=e("span",null,"Upload a file",-1),Fe=e("p",{class:"pl-1"},"or drag and drop",-1),$e=e("p",{class:"text-xs leading-5 text-gray-600"}," PNG, JPG, GIF up to 10MB ",-1),De=["src"],Le=["onClick"],Ie=e("svg",{class:"w-6 h-6",fill:"none",viewBox:"0 0 24 24",stroke:"currentColor"},[e("path",{"stroke-linecap":"round","stroke-linejoin":"round","stroke-width":"2",d:"M6 18L18 6M6 6l12 12"})],-1),Ge=[Ie],Oe=e("div",{class:"swiper-pagination"},null,-1),Re=e("div",{class:"swiper-button-prev"},null,-1),He=e("div",{class:"swiper-button-next"},null,-1),Je={class:"flex justify-end mt-4"},Qe={type:"submit",class:"inline-flex items-center gap-x-2 rounded-md bg-blue-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600"},at={__name:"Create",props:{tags:Array,categories:Array},setup(C){const w=C,o=y({name:"",description:"",price:"",stock:"",images:[],imagePreviews:[],tags:[],categories:[]}),m=y(""),g=y(""),B=F(()=>w.tags.filter(l=>!o.value.tags.some(t=>t.id===l.id)));function M(l){const t=l.target.files;if(t)for(let s=0;s<t.length;s++){const d=new FileReader;d.onload=b=>{o.value.imagePreviews.push(b.target.result),o.value.images.push(t[s])},d.readAsDataURL(t[s])}}function T(){if(m.value){const l=w.tags.find(t=>t.id===m.value);l&&!o.value.tags.some(t=>t.id===l.id)&&o.value.tags.push(l),m.value=""}}function V(l){const t=o.value.tags.findIndex(s=>s.id===l);t>-1&&o.value.tags.splice(t,1)}function j(l){o.value.imagePreviews.splice(l,1),o.value.images.splice(l,1)}function E(){let l=new FormData;l.append("name",o.value.name),l.append("description",o.value.description),l.append("price",o.value.price),l.append("stock",o.value.stock),o.value.tags.forEach(t=>{l.append("tags[]",t.id)}),o.value.images.forEach(t=>{l.append("images[]",t)}),o.value.categories.forEach(t=>{l.append("categories[]",t.id)}),A.post("/admin/products",l,{headers:{"Content-Type":"multipart/form-data"}}).then(()=>{alert("Product created successfully."),A.replace("/admin/products")}).catch(t=>{console.error("Error creating product:",t),alert("Error creating the product")})}function N(){if(g.value){const l=w.categories.find(t=>t.id===g.value);l&&!o.value.categories.some(t=>t.id===l.id)&&o.value.categories.push(l),g.value=""}}function U(l){const t=o.value.categories.findIndex(s=>s.id===l);t>-1&&o.value.categories.splice(t,1)}return(l,t)=>(i(),P(D,{title:"Create Product"},{default:c(()=>[e("div",Q,[e("nav",q,[e("ol",z,[e("li",null,[e("div",null,[r(a(v),{href:"/admin/dashboard",class:"text-gray-400 hover:text-gray-500"},{default:c(()=>[r(a(R),{class:"h-5 w-5 flex-shrink-0","aria-hidden":"true"}),K]),_:1})])]),e("li",null,[e("div",W,[r(a(k),{class:"h-5 w-5 flex-shrink-0 text-gray-400","aria-hidden":"true"}),r(a(v),{href:"/admin/dashboard",class:"ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"},{default:c(()=>[u("Admin")]),_:1})])]),e("li",null,[e("div",X,[r(a(k),{class:"h-5 w-5 flex-shrink-0 text-gray-400","aria-hidden":"true"}),r(a(v),{href:"/admin/products",class:"ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"},{default:c(()=>[u("Products")]),_:1})])]),e("li",null,[e("div",Y,[r(a(k),{class:"h-5 w-5 flex-shrink-0 text-gray-400","aria-hidden":"true"}),r(a(v),{href:"/admin/products/create",class:"ml-4 text-sm font-medium text-gray-500 hover:text-gray-700"},{default:c(()=>[u("Create")]),_:1})])])])])]),e("div",Z,[e("div",ee,[e("div",te,[e("div",se,[oe,e("form",{onSubmit:$(E,["prevent"]),class:"space-y-6"},[e("div",null,[le,p(e("input",{"onUpdate:modelValue":t[0]||(t[0]=s=>o.value.name=s),type:"text",id:"name",name:"name",class:"my-4 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500",placeholder:"Product..."},null,512),[[x,o.value.name]])]),e("div",null,[ae,p(e("textarea",{"onUpdate:modelValue":t[1]||(t[1]=s=>o.value.description=s),id:"description",name:"description",rows:"4",class:"my-4 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500",placeholder:"Provide a detailed description of the product"},null,512),[[x,o.value.description]])]),e("div",ie,[e("div",re,[ne,p(e("input",{"onUpdate:modelValue":t[2]||(t[2]=s=>o.value.price=s),type:"text",id:"price",name:"price",class:"my-4 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500",placeholder:"0.00"},null,512),[[x,o.value.price]])]),e("div",de,[ce,p(e("input",{"onUpdate:modelValue":t[3]||(t[3]=s=>o.value.stock=s),type:"number",id:"stock",name:"stock",class:"my-4 block w-full border-gray-300 rounded-md shadow-sm focus:ring-blue-500 focus:border-blue-500",placeholder:"Quantity"},null,512),[[x,o.value.stock]])])]),e("div",null,[ue,e("div",pe,[e("div",me,[p(e("select",{"onUpdate:modelValue":t[4]||(t[4]=s=>g.value=s),class:"flex-grow bg-gray-100 border-none rounded-l-lg py-2 px-4 focus:ring-1 focus:ring-blue-500 focus:outline-none"},[ge,(i(!0),n(h,null,f(C.categories,s=>(i(),n("option",{key:s.id,value:s.id},_(s.name),9,fe))),128))],512),[[S,g.value]]),e("button",{type:"button",onClick:N,class:"bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-r-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"}," Add ")]),e("div",he,[(i(!0),n(h,null,f(o.value.categories,(s,d)=>(i(),n("div",{key:s.id,class:"flex items-center bg-green-600 text-white rounded py-2 px-3 text-sm font-semibold cursor-pointer hover:bg-green-700"},[u(_(s.name)+" ",1),e("button",{onClick:b=>U(s.id),class:"ml-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-0.5"},xe,8,be)]))),128))])])]),e("div",null,[_e,e("div",we,[e("div",ye,[p(e("select",{"onUpdate:modelValue":t[5]||(t[5]=s=>m.value=s),class:"flex-grow bg-gray-100 border-none rounded-l-lg py-2 px-4 focus:ring-1 focus:ring-blue-500 focus:outline-none"},[ke,(i(!0),n(h,null,f(B.value,s=>(i(),n("option",{key:s.id,value:s.id},_(s.name),9,Ce))),128))],512),[[S,m.value]]),e("button",{type:"button",onClick:T,class:"bg-blue-500 hover:bg-blue-600 text-white font-bold rounded-r-lg py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500"}," Add ")]),e("div",Pe,[(i(!0),n(h,null,f(o.value.tags,(s,d)=>(i(),n("div",{key:s.id,class:"flex items-center bg-blue-600 text-white rounded-full py-2 px-3 text-sm font-semibold cursor-pointer hover:bg-blue-700"},[u(_(s.name)+" ",1),e("button",{onClick:b=>V(s.id),class:"ml-2 bg-red-500 hover:bg-red-600 text-white rounded-full p-0.5"},Be,8,Se)]))),128))])])]),e("div",Me,[Te,e("div",Ve,[e("div",je,[r(a(H),{class:"mx-auto h-12 w-12 text-gray-300","aria-hidden":"true"}),e("div",Ee,[e("label",Ne,[Ue,e("input",{id:"images",name:"images[]",type:"file",class:"sr-only",multiple:"",onChange:M},null,32)]),Fe]),$e])])]),r(a(G),{slidesPerView:1,spaceBetween:30,loop:!0,pagination:{clickable:!0,el:".swiper-pagination"},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},modules:[a(L),a(I)],class:"mySwiper"},{default:c(()=>[(i(!0),n(h,null,f(o.value.imagePreviews,(s,d)=>(i(),P(a(O),{key:d},{default:c(()=>[e("img",{src:s,alt:"Preview",class:"object-cover rounded-lg shadow-md h-96"},null,8,De),e("button",{onClick:b=>j(d),class:"absolute top-0 right-0 m-2 bg-red-500 text-white p-1 rounded-full"},Ge,8,Le)]),_:2},1024))),128)),Oe,Re,He]),_:1},8,["pagination","navigation","modules"]),e("div",Je,[e("button",Qe,[r(a(J),{class:"-ml-0.5 h-5 w-5","aria-hidden":"true"}),u(" Create product ")])])],32)])])])])]),_:1}))}};export{at as default};