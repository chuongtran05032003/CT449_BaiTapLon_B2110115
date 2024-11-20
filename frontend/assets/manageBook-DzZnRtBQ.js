import{h as N,u as E,r as i,o as A,x as M,i as p,c as m,b as e,t as f,z as j,F as k,A as S,B as F,a as $,p as D,e as L,v as V,C as X,m as z,l as H,y as O}from"./index-BHu86sKb.js";import{b as _}from"./book_service-DSk0N-db.js";import{S as I}from"./sweetalert2.esm.all-DwEdJQJv.js";const K={class:"p-2"},R={class:"p-2"},U={class:"p-2"},q={class:"p-2 hidden sm:table-cell"},G={class:"p-2 hidden sm:table-cell"},Q={class:"p-2 flex justify-end"},J={class:"relative inline-block"},P={__name:"manageBookItem",props:{item:{type:Object}},setup(r){const v=N(),x=E(),l=r,s=i(!1),c=i(null),u=i(null),w=i(!1),y=async()=>{if(s.value=!s.value,s.value){await S();const t=u.value.getBoundingClientRect(),o=window.innerHeight;t.bottom>o&&(w.value=!0)}},g=t=>{s.value&&!c.value.contains(t.target)&&!u.value.contains(t.target)&&(s.value=!1)},d=async()=>{if((await I.fire({title:"Xác nhận xóa?",text:"Bạn sẽ không thể khôi phục lại điều này!",icon:"warning",showCancelButton:!0,confirmButtonColor:"#d33",cancelButtonColor:"#3085d6",confirmButtonText:"Xóa",cancelButtonText:"Hủy"})).isConfirmed){const o=await _.delete(l.item._id);x.success(o.message),F.emit("reload")}},h=()=>{s.value=!1,v.push({name:"manageBookView",params:{id:l.item._id}})},n=()=>{s.value=!1,v.push({name:"manageBookEdit",params:{id:l.item._id}})};return A(async()=>{document.addEventListener("click",g)}),M(()=>{document.removeEventListener("click",g)}),(t,o)=>{var a,b,B,C,T;return p(),m(k,null,[e("td",K,f(((a=r.item)==null?void 0:a.MaSach)||"N/A"),1),e("td",R,f(((b=r.item)==null?void 0:b.TenSach)||"N/A"),1),e("td",U,f(((B=r.item)==null?void 0:B.TacGia)||"N/A"),1),e("td",q,f(((C=r.item)==null?void 0:C.TheLoai.TenMucSach)||"N/A"),1),e("td",G,f(((T=r.item)==null?void 0:T.NXB.TenNXB)||"N/A"),1),e("td",Q,[e("div",J,[e("div",{onClick:y,ref_key:"dropdownButton",ref:c,class:"flex items-center justify-center w-10 h-10 rounded-full cursor-pointer hover:bg-[#FFD573]"},o[0]||(o[0]=[e("i",{class:"fa-solid fa-ellipsis-vertical"},null,-1)]),512),e("div",{class:j([{hidden:!s.value,"bottom-full mb-2":w.value},"absolute bg-white shadow-lg rounded-lg w-40 border mt-2 z-10 right-0"]),ref_key:"dropdownMenu",ref:u},[e("ul",{class:"py-2"},[e("li",{onClick:n,class:"px-4 py-2 cursor-pointer hover:bg-[#FEF6DF]"},"Cập nhật"),e("li",{onClick:d,class:"px-4 py-2 cursor-pointer hover:bg-[#FEF6DF]"},"Xóa"),e("li",{onClick:h,class:"px-4 py-2 cursor-pointer hover:bg-[#FEF6DF]"},"Chi tiết")])],2)])])],64)}}},W={class:"flex-1 rounded-xl bg-white flex flex-col overflow-hidden relative py-5 pl-5"},Y={class:"h-fit w-full items-center pr-5"},Z={class:"flex items-center justify-end h-fit"},ee={class:"w-full sm:w-1/2 flex justify-end border border-slate-500 focus-within:border-blue-500 rounded-2xl overflow-hidden bg-white"},te={class:"flex-1 relative overflow-y-auto mt-10 pr-5",style:{"scrollbar-gutter":"stable"}},se={class:"table-auto w-full"},oe={key:0,class:"text-center py-2 cursor-pointer w-full h-fit hover:bg-[#FEF6DF]"},ie={__name:"manageBook",setup(r){const v=N(),x=E(),l=i(""),s=i([]),c=i(!1),u=async()=>{var n,t;d.value=!1;try{const o=await _.getAll();s.value=o}catch(o){const a=((t=(n=o.response)==null?void 0:n.data)==null?void 0:t.message)||"Có lỗi xảy ra. Vui lòng thử lại.";x.error(a)}},w=()=>{v.push({name:"manageBookAdd"})},y=()=>{l.value="",c.value=!1},g=()=>{l.value!==""?c.value=!0:c.value=!1},d=i(!1),h=async()=>{try{if(d.value=!1,l.value.trim()){const n=await _.getOne(l.value);s.value=n}}catch{s.value=[],d.value=!0}};return A(()=>{F.on("reload",()=>{l.value.trim()===""?u():h()})}),$(()=>{F.off("reload")}),(n,t)=>{const o=O("router-view");return p(),m(k,null,[D(o),e("div",W,[e("div",Y,[t[3]||(t[3]=e("h3",{class:"font-bold text-lg whitespace-nowrap mb-5"},"Quản lý sách",-1)),e("div",Z,[e("div",ee,[L(e("input",{type:"text",class:"h-10 flex-1 pl-4 text-sm focus:outline-none",onKeydown:X(h,["enter"]),"onUpdate:modelValue":t[0]||(t[0]=a=>l.value=a),onInput:g,placeholder:"Tìm kiếm sách..."},null,544),[[V,l.value]]),e("div",{class:j(["flex items-center justify-center w-10 h-10 hover:bg-slate-300 rounded-full bg-white",c.value?"flex":"hidden"]),onClick:y},t[1]||(t[1]=[e("i",{class:"fa-solid fa-circle-xmark"},null,-1)]),2),e("div",{class:"w-10 h-10 bg-white flex items-center justify-center cursor-pointer border-l-2",onClick:h},t[2]||(t[2]=[e("i",{class:"fa-solid fa-magnifying-glass"},null,-1)]))])])]),e("div",te,[e("table",se,[t[4]||(t[4]=e("thead",null,[e("tr",{class:"text-left sticky top-0 border-b-2 border-x-0 bg-white m-0 z-20"},[e("th",{class:"p-2 whitespace-nowrap"}," Mã sách"),e("th",{class:"p-2 w-fit whitespace-nowrap"}," Tên sách"),e("th",{class:"p-2 whitespace-nowrap"}," Tác giả"),e("th",{class:"p-2 hidden sm:table-cell whitespace-nowrap"}," Thể loại"),e("th",{class:"p-2 hidden sm:table-cell whitespace-nowrap"}," Nhà xuất bản"),e("th",{class:"p-2 w-16"})])],-1)),e("tbody",null,[(p(!0),m(k,null,z(s.value,(a,b)=>(p(),m("tr",{class:"border-y-2 border-x-0 cursor-pointer hover:bg-[#FEF6DF]",key:b},[D(P,{item:a},null,8,["item"])]))),128))])]),d.value?(p(),m("div",oe,"Không tìm thấy kết quả phù hợp!")):H("",!0),e("button",{onClick:u,class:"text-left py-2 px-4 rounded-2xl mt-5 text-blue-600 cursor-pointer w-fit h-fit hover:bg-[#FEF6DF]"},"Hiển thị tất cả")]),e("div",{class:"absolute w-fit h-fit bottom-6 right-6 rounded-xl flex justify-center items-center space-x-2"},[e("div",{onClick:w,class:"flex items-center w-fit h-fit bg-[#FFD573] hover:bg-[#FEF6DF] rounded-lg cursor-pointer"},t[5]||(t[5]=[e("span",{class:"pl-4"},"Thêm",-1),e("div",{class:"w-10 h-10 flex justify-center items-center"},[e("i",{class:"fa-solid fa-plus"})],-1)]))])])],64)}}};export{ie as default};
