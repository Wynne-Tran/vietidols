(this.webpackJsonpvietsidol=this.webpackJsonpvietsidol||[]).push([[0],{35:function(n,t,c){},36:function(n,t,c){},37:function(n,t,c){},56:function(n,t,c){},67:function(n,t,c){"use strict";c.r(t);var e=c(1),i=c(29),h=c.n(i),s=(c(35),c(3)),r=(c(36),c(69)),j=c(70),a=c(10),g=(c(37),c(18)),b=c.n(g),d="https://vietidols-server.herokuapp.com",l=c(13),o=c(14),u=c(12),O=(c(56),c(0)),x=function(){var n=Object(s.f)(),t=Object(e.useState)({name:"",password:""}),c=Object(u.a)(t,2),i=c[0],h=c[1],r=Object(e.useState)(""),j=Object(u.a)(r,2),g=j[0],x=j[1],p=function(n){h(Object(o.a)(Object(o.a)({},i),{},Object(l.a)({},n.target.name,n.target.value)))};return Object(O.jsx)("div",{className:"col-md-12",children:Object(O.jsx)("div",{className:"card card-container",children:Object(O.jsxs)("form",{onSubmit:function(t){var c,e;t.preventDefault(),(c=i.name,e=i.password,b.a.post(d+"/auth/signin",{name:c,password:e}).then((function(n){return n.data.token&&localStorage.setItem("currentUser",JSON.stringify(n.data)),n.data}))).then((function(){n.push("/"),window.location.reload()}),(function(n){var t=n.response.data.errors;x(t)}))},children:[Object(O.jsx)("h1",{children:"Sign In"}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Name:"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"email",name:"name",value:i.name,onChange:p,required:!0})]}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Password:"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"password",name:"password",value:i.password,onChange:p,required:!0})]}),g&&Object(O.jsx)("div",{className:"alert alert-danger",children:g}),Object(O.jsx)("br",{}),Object(O.jsx)("div",{className:"alert alert-info",children:Object(O.jsxs)(a.b,{to:"/signup",children:["Don't have an account? ",Object(O.jsx)("br",{})," Click here to Sign Up"]})}),Object(O.jsx)("button",{className:"btn btn-primary btn-block",type:"submit",children:"Sign In"})]})})})},p=c.p+"static/media/Don-dang-ky-thi-hat-2021.a84ef39e.pdf",m=function(){var n=JSON.parse(localStorage.getItem("currentUser"));return console.log(n),null!==n?Object(O.jsxs)(r.a,{children:[Object(O.jsxs)(r.a.Body,{children:[Object(O.jsx)(r.a.Title,{children:Object(O.jsxs)("div",{className:"cardtitle",children:[Object(O.jsx)("h1",{children:"HUONG DUONG UNIVERSAL MEDIA"}),Object(O.jsx)("h3",{children:"1125 Dufferin Street, Toronto, Canada, M6H 4B7"}),Object(O.jsx)("h3",{children:"Email: info@huongduongunimedia.ca"}),Object(O.jsx)("h3",{children:"Web: www.vietidols.com"})]})}),Object(O.jsx)("hr",{}),Object(O.jsxs)(r.a.Text,{children:[Object(O.jsx)("h1",{children:"TH\xd4NG B\xc1O"}),Object(O.jsx)("h2",{children:'Cu\u1ed9c thi "GI\u1eccNG H\xc1T VI\u1ec6T TR\u1ef0C TUY\u1ebeN TO\xc0N C\u1ea6U"'}),Object(O.jsx)("p",{children:"- \u0110\u01a1n v\u1ecb t\u1ed5 ch\u1ee9c: c\xf4ng ty HUONG DUONG Universal Media (Canada)."}),Object(O.jsxs)("p",{children:["+ Gi\xe1m \u0110\u1ed1c \u0110i\u1ec1u H\xe0nh: Minh Chi\xeau Anh",Object(O.jsx)("br",{}),"+ Ph\xf3 Giasm \u0110\u1ed1c \u0110i\u1ec1u H\xe0nh: Ca s\u1ef9 Nh\u01b0 Hoa",Object(O.jsx)("br",{}),"- Ban Gi\xe1m Kh\u1ea3o chung k\u1ebft: nh\u1ea1c s\u1ef9 Tr\u01b0\u1eddng Sa v\xe0 nh\u1ea1c s\u1ef9 H\xf2a B\xecnh",Object(O.jsx)("br",{}),"- Ban Gi\xe1m Kh\u1ea3o S\u01a1 Tuy\u1ec3n v\xe0 B\xe1n K\u1ebft: ca s\u1ef9 Nh\u01b0 Hoa, ca s\u1ef9 Nguy\xean D\u0169ng v\xe0 Nh\u1ea1c s\u1ef9 Andy",Object(O.jsx)("br",{}),"- Nh\xe0 t\xe0i tr\u1ee3: Vietidols, Piel Services Ltd, Hung Trung Services Trading Co,.."]})]}),Object(O.jsx)("hr",{}),Object(O.jsxs)(r.a.Text,{children:[Object(O.jsx)("strong",{children:Object(O.jsx)("p",{children:"- \u0110\u01a1n v\u1ecb \u0111\u0103ng k\xfd Online theo link: https: https://vietidols.com"})}),Object(O.jsx)("strong",{children:Object(O.jsx)("p",{children:"\u0110i\u1ec1u 1: \u0110\u1ed1i t\u01b0\u1ee3ng tham gia"})}),Object(O.jsx)("p",{children:" T\u1ea5t c\u1ea3 m\u1ecdi ng\u01b0\u1eddi t\u1eeb 16 tu\u1ed5i tr\u1edf l\xean"}),Object(O.jsx)("p",{children:" \u0110\u1ed1i t\u01b0\u1ee3ng tham gia kh\xf4ng \u0111\u01b0\u1ee3c l\xe0 nh\xe2n vi\xean c\u1ee7a \u0111\u01a1n v\u1ecb t\u1ed5 ch\u1ee9c, nh\xe0 t\xe0i tr\u1ee3, ng\u01b0\u1eddi th\xe2n c\u1ee7a th\xe0nh vi\xean Ban t\u1ed5 ch\u1ee9c (BTC)"}),Object(O.jsx)("strong",{children:Object(O.jsx)("p",{children:"\u0110i\u1ec1u 2: Th\u1eddi gian ch\u01b0\u01a1ng tr\xecnh"})}),Object(O.jsx)("p",{children:" Ch\u01b0\u01a1ng tr\xecnh d\u1ef1 ki\u1ebfn t\u1eeb ng\xe0y 01/03/2021 \u0111\u1ebfn ng\xe0y 15/05/2021 v\u1edbi c\xe1c chi ti\u1ebft nh\u01b0 sau:"}),Object(O.jsx)("p",{children:" - T\u1eeb ng\xe0y 01/03/2021 \u0111\u1ebfn ng\xe0y 31/03/2021 nh\u1eadn h\u1ed3 s\u01a1 \u0111\u0103ng k\xfd v\xe0 2 videos (m\u1ed7i video 1 b\xe0i) h\xe1t v\u1edbi nh\u1ea1c kh\xf4ng ch\u1ec9nh s\u1eeda gi\u1ecdng."}),Object(O.jsx)("p",{children:" - Ng\xe0y 10/04/2021 c\xf4ng b\u1ed1 k\u1ebft qu\u1ea3 v\xf2ng s\u01a1 tuy\u1ec3n tr\xean fanpage Gi\u1ecdng H\xe1t Vi\u1ec7t Tr\u1ef1c Tuy\u1ebfn To\xe0n C\u1ea7u v\xe0 trang \u0111i\u1ec7n t\u1eed vietidols.com"}),Object(O.jsx)("p",{children:" - Ng\xe0y 16-17-18 th\xe1ng 4, 2021 thi b\xe1n k\u1ebft: thi t\u1ea1i nh\xf3m Gi\u1ecdng H\xe1t Vi\u1ec7t Tr\u1ef1c Tuy\u1ebfn To\xe0n C\u1ea7u tr\xean facebook theo link https://www.facebook.com/groups/724323565064795"}),Object(O.jsx)("p",{children:" - M\u1ed7i th\xed sinh tr\xecnh b\xe0y 2 ca kh\xfac t\u1ef1 ch\u1ecdn c\xf3 nh\u1ea1c trong th\u1eddi gian 15 ph\xfat"}),Object(O.jsx)("p",{children:" - Ng\xe0y 23/04/2021: C\xf4ng b\u1ed1 danh s\xe1ch th\xed sinh v\xe0o chung k\u1ebft"}),Object(O.jsx)("p",{children:" - Ng\xe0y 7-8 th\xe1ng 5, 2021 thi chung k\u1ebft: Thi t\u1ea1i nh\xf3m Gi\u1ecdng H\xe1t Vi\u1ec7t Tr\u1ef1c Tuy\u1ebfn To\xe0n C\u1ea7u tr\xean facebook theo link https://www.facebook.com/groups/724323565064795"}),Object(O.jsx)("p",{children:" - Th\xed sinh h\xe1t m\u1ed9t b\xe0i t\u1ef1 ch\u1ecdn v\xe0 m\u1ed9t b\xe0i y\xeau c\u1ea7u c\xf3 nh\u1ea1c trong v\xf2ng 15 ph\xfat"}),Object(O.jsx)("p",{children:" - Ng\xe0y 15/05/2021 C\xf4ng b\u1ed1 chung k\u1ebft trao gi\u1ea3i"}),Object(O.jsx)("p",{children:" (Trong tr\u01b0\u1eddng h\u1ee3p b\u1ea5t kh\u1ea3 kh\xe1ng, n\u1ebfu ng\xe0y thi ho\u1eb7c ng\xe0y trao gi\u1ea3i thay \u0111\u1ed5i s\u1ebd \u0111\u01b0\u1ee3c th\xf4ng b\xe1o sau)"}),Object(O.jsx)("strong",{children:Object(O.jsx)("p",{children:"\u0110i\u1ec1u 3: Qui \u0111\u1ecbnh h\u1ed3 s\u1ee3 d\u1ef1 thi v\xe0 c\xe1ch th\u1ee9c tham gia:"})}),Object(O.jsx)("p",{children:" BTC nh\u1eadn h\u1ed3 s\u01a1 \u0111\u1ebfn h\u1ebft ng\xe0y 31/03/2021. H\u1ed3 s\u01a1 g\u1eedi sau 23h59 ng\xe0y 31/03/2021 \u0111\u01b0\u1ee3c xem l\xe0 kh\xf4ng h\u1ee3p l\u1ec7 "}),Object(O.jsx)("p",{children:" H\u1ed3 s\u01a1 d\u1ef1 thi g\u1ed3m:"}),Object(O.jsx)("p",{children:" - \u0110\u01a1n d\u1ef1 thi"}),Object(O.jsx)("p",{children:" - M\u1ed9t \u1ea3nh ch\xe2n dung v\xe0 m\u1ed9t \u1ea3nh to\xe0n th\xe2n (\u0110\u1ed1i v\u1edbi \u1ea3nh g\u1eedi qua email, ph\u1ea3i \u0111\u01b0\u1ee3c th\u1ec3 hi\u1ec7n d\u01b0\u1edbi d\u1ea1ng file \u1ea3nh \u0111\u1ecbnh d\u1ea1ng JPEG ho\u1eb7c JPG c\xf3 chi\u1ec1u ngang d\u01b0\u1edbi 1.000 pixel)"}),Object(O.jsx)("p",{children:" - Hai b\xe0i h\xe1t (kh\xf4ng h\u1ea1n ch\u1ebf th\u1ec3 lo\u1ea1i)"}),Object(O.jsxs)("p",{children:[" - H\u1ed3 s\u01a1 d\u1ef1 thi tr\u1ef1c tuy\u1ebfn g\u1edfi v\u1ec1 h\u1ed9p th\u01b0 \u0111i\u1ec7n t\u1eed:",Object(O.jsx)("br",{}),"Email: info@huongduongunimedia.com v\xe0 huongduongcanada@gmail.com"]}),Object(O.jsx)("strong",{children:Object(O.jsx)("p",{children:"\u0110i\u1ec1u 4: Gi\u1ea3i th\u01b0\u1edfng:"})}),Object(O.jsx)("p",{children:" - Gi\u1ea3i nh\u1ea5t (1 gi\u1ea3i):  20 tri\u1ec7u VND/ CAN 1,000 v\xe0 gi\u1ea5y ch\u1ee9ng nh\u1eadn c\u1ee7a BTC"}),Object(O.jsx)("p",{children:" - Gi\u1ea3i nh\xec (1 gi\u1ea3i): 10 tri\u1ec7u VND/ CAN 500  v\xe0 gi\u1ea5y ch\u1ee9ng nh\u1eadn c\u1ee7a BTC"}),Object(O.jsx)("p",{children:" - Gi\u1ea3i ba (1 gi\u1ea3i): 5  tri\u1ec7u VND/ CAN 250  v\xe0 gi\u1ea5y ch\u1ee9ng nh\u1eadn c\u1ee7a BTC"}),Object(O.jsx)("p",{children:" - C\xe1c gi\u1ea3i ph\u1ee5: 2 tri\u1ec7u VND/ CAN 100  v\xe0 gi\u1ea5y ch\u1ee9ng nh\u1eadn c\u1ee7a BTC"}),Object(O.jsx)("strong",{children:Object(O.jsx)("p",{children:"\u0110i\u1ec1u 5: Ti\xeau chu\u1ea9n ch\u1ea5m gi\u1ea3i v\xe0 c\xe1c v\xf2ng thi c\u1ee7a gi\u1ea3i:"})}),Object(O.jsx)("p",{children:" T\u1ed5ng c\u1ed9ng s\u1ebd c\xf3 50 th\xed sinh \u0111\u01b0\u1ee3c ch\u1ecdn v\xe0o v\xf2ng chung k\u1ebft"}),Object(O.jsx)("p",{children:" Ban gi\xe1m kh\u1ea3o s\u1ebd b\xecnh ch\u1ecdn 10 th\xed sinh xu\u1ea5t s\u1eafc nh\u1ea5t trong 50 th\xed sinh \u0111\u1ec3 v\xe0o v\xf2ng chung k\u1ebft x\u1ebfp h\u1ea1ng."}),Object(O.jsx)("p",{children:" C\xe1ch ch\u1ea5m \u0111i\u1ec3m nh\u01b0 sau: "}),Object(O.jsx)("p",{children:" a/ Tr\xecnh di\u1ec5n:"}),Object(O.jsx)("p",{children:" - Phong c\xe1ch tr\xecnh di\u1ec5n"}),Object(O.jsx)("p",{children:" - Trang ph\u1ee5c"}),Object(O.jsx)("p",{children:" b/ Gi\u1ecdng h\xe1t:"}),Object(O.jsx)("p",{children:" - Ph\xe1t \xe2m, nh\u1ecbp \u0111i\u1ec7u, c\xe1ch di\u1ec5n \u0111\u1ea1t"}),Object(O.jsx)("p",{children:" c/ C\xe1ch t\xednh \u0111i\u1ec3m"}),Object(O.jsx)("p",{children:" - Phong c\xe1ch tr\xecnh di\u1ec5n:  30% t\u1ed5ng s\u1ed1 \u0111i\u1ec3m"}),Object(O.jsx)("p",{children:" - Gi\u1ecdng h\xe1t: 50% t\u1ed5ng s\u1ed1 \u0111i\u1ec3m"}),Object(O.jsx)("p",{children:" - Ban t\u1ed5 ch\u1ee9c s\u1ebd t\xednh th\xeam \u0111i\u1ec3m d\u1ef1a tr\xean s\u1ed1 lu\u1ee3ng b\xecnh lu\u1eadn (comments) v\xe0 chia s\u1ebb (shares): 20%"}),Object(O.jsx)("strong",{children:Object(O.jsx)("p",{children:"\u0110i\u1ec1u 6: C\xf4ng b\u1ed1 h\xecnh \u1ea3nh, th\xf4ng tin"})}),Object(O.jsx)("p",{children:" Thi sinh ch\u1ecbu tr\xe1ch nhi\u1ec7m v\u1ec1 t\xednh x\xe1c th\u1ef1c c\u1ee7a th\xf4ng tin"}),Object(O.jsx)("p",{children:" BTC \u0111\u01b0\u1ee3c to\xe0n quy\u1ec1n s\u1eed d\u1ee5ng \u1ea3nh v\xe0 b\xe0i h\xe1t thu h\xecnh trong su\u1ed1t ch\u01b0\u01a1ng tr\xecnh cho \u0111\u1ebfn khi k\u1ebft th\xfac"}),Object(O.jsx)("p",{children:" Ca kh\xfac d\u1ef1 thi ph\u1ea3i \u0111\xfang nguy\xean b\u1ea3n Vi\u1ec7t ng\u1eef c\xf3 n\u1ed9i dung l\xe0nh m\u1ea1nh"}),Object(O.jsx)("strong",{children:Object(O.jsx)("p",{children:"\u0110i\u1ec1u 7: B\u1ea3n quy\u1ec1n"})}),Object(O.jsx)("p",{children:" BTC c\xf3 quy\u1ec1n xu\u1ea5t b\u1ea3n, qu\u1ea3ng b\xe1 th\u01b0\u01a1ng m\u1ea1i v\u1edbi h\xecnh \u1ea3nh v\xe0 b\u1ea3ng thu \xe2m gi\u1ecdng d\u1ef1 thi c\u1ee7a ng\u01b0\u1eddi th\xed sinh m\xe0 kh\xf4ng c\u1ea7n ph\u1ea3i b\xe1o tr\u01b0\u1edbc v\xe0 kh\xf4ng c\u1ea7n th\xeam b\u1ea5t k\u1ef3 m\u1ed9t chi ph\xed n\xe0o"}),Object(O.jsx)("p",{children:" Th\xed sinh s\u1ebd ph\u1ea3i c\xf3 m\u1eb7t t\u1ea1i ch\u01b0\u01a1ng tr\xecnh do Ban t\u1ed5 ch\u1ee9c th\xf4ng b\xe1o "}),Object(O.jsx)("strong",{children:Object(O.jsx)("p",{children:"\u0110i\u1ec1u 8: H\u1ea1n ch\u1ebf tr\xe1ch nhi\u1ec7m"})}),Object(O.jsx)("p",{children:" BTC kh\xf4ng ch\u1ecbu tr\xe1ch nhi\u1ec7m v\u1edbi c\xe1c b\u1ea3n thu \xe2m gi\u1ecdng b\u1ecb thay \u0111\u1ed5i, bi\u1ebfn d\u1ea1ng do   m\u1ea1ng Internet"}),Object(O.jsx)("p",{children:" BTC kh\xf4ng ch\u1ecbu tr\xe1ch nhi\u1ec7m v\u1ec1 h\u1ed3 s\u01a1 d\u1ef1 thi th\u1ea5t l\u1ea1c ho\u1eb7c h\u1ed3 s\u01a1  \u0111\u1ebfn tr\u1ec5 so v\u1edbi th\u1eddi gian quy \u0111\u1ecbnh c\u1ee7a cu\u1ed9c thi \u0111\u1ed1i v\u1edbi c\xe1c thi sinh g\u1eedi h\u1ed3 s\u01a1 d\u1ef1 thi qua \u0111\u01b0\u1eddng email"}),Object(O.jsx)("p",{children:" BTC kh\xf4ng ch\u1ecbu tr\xe1ch nhi\u1ec7m nh\u1eefng th\xf4ng tin khai kh\xf4ng \u0111\xfang c\u1ee7a th\xed sinh"}),Object(O.jsx)("strong",{children:Object(O.jsx)("p",{children:"\u0110i\u1ec1u 9: \u0110i\u1ec1u ki\u1ec7n ph\xe1p l\xfd"})}),Object(O.jsx)("p",{children:" BTC gi\u1eef quy\u1ec1n ki\u1ec3m tra t\u01b0 c\xe1ch c\u1ee7a ng\u01b0\u1eddi th\xed sinh c\xf3 h\u1ee3p th\u1ee9c, c\xf3 theo \u0111\xfang c\xe1c \u0110i\u1ec1u l\u1ec7 c\u1ee7a cu\u1ed9c thi hay kh\xf4ng, k\u1ec3 c\u1ea3 sau khi \u0111\xe3 trao gi\u1ea3i. Ch\u1ec9 BTC m\u1edbi c\xf3 quy\u1ec1n trao gi\u1ea3i th\u01b0\u1edfng v\xe0 thu h\u1ed3i gi\u1ea3i th\u01b0\u1edfng"}),Object(O.jsx)("strong",{children:Object(O.jsx)("p",{children:"\u0110i\u1ec1u 10: C\xf4ng b\u1ed1 gi\u1ea3i th\u01b0\u1edfng"})}),Object(O.jsx)("p",{children:" Gi\u1ea3i th\u01b0\u1edfng cu\u1ed9c thi \u201cGI\u1eccNG H\xc1T VI\u1ec6T TR\u1ef0C TUY\u1ebeN TO\xc0N C\u1ea6U \u2013 2021\u201d"}),Object(O.jsx)("p",{children:" \u0110\u1ed1i v\u1edbi c\xe1c th\xed sinh v\xe0o v\xf2ng chung k\u1ebft nh\u01b0ng kh\xf4ng li\xean h\u1ec7 v\u1edbi Ban t\u1ed5 ch\u1ee9c \u0111\u1ec3 nh\u1eadn gi\u1ea3i th\u01b0\u1edfng sau 07 ng\xe0y k\u1ec3 t\u1eeb ng\xe0y \u0111\u01b0\u1ee3c th\xf4ng b\xe1o, th\xec xem nh\u01b0 th\xed sinh t\u1eeb ch\u1ed1i nh\u1eadn gi\u1ea3i th\u01b0\u1edfng v\xe0 BTC kh\xf4ng ch\u1ecbu tr\xe1ch nhi\u1ec7m gi\u1ea3i quy\u1ebft tr\u01b0\u1eddng h\u1ee3p n\xe0y"}),Object(O.jsx)("p",{children:" To\xe0n b\u1ed9 danh hi\u1ec7u, gi\u1ea3i th\u01b0\u1edfng c\u1ee7a cu\u1ed9c thi s\u1ebd \u0111\u01b0\u1ee3c BTC c\xf4ng b\u1ed1 tr\xean trang th\xf4ng tin \u0111i\u1ec7n t\u1eed: vietidols.com v\xe0 fanpage GI\u1eccNG H\xc1T VI\u1ec6T TR\u1ef0C TUY\u1ebeN TO\xc0N C\u1ea6U"}),Object(O.jsx)("strong",{children:Object(O.jsx)("p",{children:"\u0110i\u1ec1u 11: D\u1eebng ho\u1eb7c h\u1ee7y cu\u1ed9c thi"})}),Object(O.jsx)("p",{children:" Trong tru\u1eddng h\u1ee3p b\u1ea5t kh\u1ea3 kh\xe1ng nh\u01b0 thi\xean tai, b\u1ea1o lo\u1ea1n, chi\u1ebfn tranh,..BTC s\u1ebd thay \u0111\u1ed5i ng\xe0y thi v\xe0 s\u1ebd th\xf4ng b\xe1o v\u1edbi th\xed sinh qua email \u0111\u1ec3 bi\u1ebft th\xeam chi ti\u1ebft v\u1ec1 cu\u1ed9c thi"}),Object(O.jsx)("strong",{children:Object(O.jsx)("p",{children:"\u0110i\u1ec1u 12: C\xe1c quy \u0111\u1ecbnh kh\xe1c"})}),Object(O.jsx)("p",{children:" B\u1ea3n Th\u1ec3 l\u1ec7 n\xe0y c\xf3 hi\u1ec7u l\u1ef1c k\u1ec3 t\u1eeb th\u1eddi \u0111i\u1ec3m \u0111\u01b0\u1ee3c \u0111\u0103ng t\u1ea3i l\xean trang th\xf4ng tin \u0111i\u1ec7n t\u1eed www.vietidols.com v\xe0 fanpage Gi\u1ecdng H\xe1t Vi\u1ec7t Tr\u1ef1c Tuy\u1ebfn To\xe0n C\u1ea7u"}),Object(O.jsx)("p",{children:" Trong m\u1ecdi tr\u01b0\u1eddng h\u1ee3p, BTC b\u1ea3o l\u01b0u quy\u1ec1n thay \u0111\u1ed5i, b\u1ed5 sung ho\u1eb7c ch\u1ec9nh s\u1eeda m\u1ed9t ph\u1ea7n ho\u1eb7c to\xe0n b\u1ed9 n\u1ed9i dung c\u1ee7a Th\u1ec3 L\u1ec7 n\xe0y mi\u1ec5n l\xe0 nh\u1eefng s\u1eeda \u0111\u1ed5i ho\u1eb7c b\u1ed5 sung \u0111\xf3 kh\xf4ng l\xe0m \u1ea3nh h\u01b0\u1edfng \u0111\u1ebfn quy\u1ec1n l\u1ee3i c\u1ee7a th\xed sinh"})]}),Object(O.jsx)(j.a,{variant:"primary",children:Object(O.jsx)(a.b,{style:{color:"white"},to:p,target:"_blank",download:!0,children:"Nh\u1ea5n v\xe0o \u0111\xe2y \u0111\u1ec3 t\u1ea3i v\u1ec1 \u0111\u01a1n d\u1ef1 thi"})})]}),Object(O.jsxs)(r.a.Footer,{className:"text-muted",children:[Object(O.jsx)("p",{children:"Toronto, Canada ng\xe0y 20 th\xe1ng 02 n\u0103m 2021"}),Object(O.jsx)("br",{}),Object(O.jsx)("p",{children:"Minh Chi\xeau Anh"}),Object(O.jsx)("p",{children:"Gi\xe1m \u0110\u1ed1c \u0110i\u1ec1u H\xe0nh"}),Object(O.jsx)("p",{children:"Huong Duong Universal Media"})]})]}):Object(O.jsx)(x,{})},v=function(){var n=Object(e.useState)({name:"",password:""}),t=Object(u.a)(n,2),c=t[0],i=t[1],h=Object(e.useState)(""),s=Object(u.a)(h,2),r=s[0],j=s[1],g=Object(e.useState)(!1),x=Object(u.a)(g,2),p=x[0],m=x[1],v=function(n){i(Object(o.a)(Object(o.a)({},c),{},Object(l.a)({},n.target.name,n.target.value)))};return Object(O.jsx)("div",{className:"col-md-12",children:Object(O.jsx)("div",{className:"card card-container",children:Object(O.jsxs)("form",{onSubmit:function(n){var t;n.preventDefault(),(t=c,b.a.post(d+"/auth/signup",t,{headers:{"Content-Type":"application/json"}})).then((function(n){j(n.data.message),m(!0),i({name:"",password:""})}),(function(n){j(n.response.data.errors),m(!1)}))},children:[Object(O.jsx)("h1",{children:"Sign Up"}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Name:"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"email",name:"name",value:c.name,onChange:v,required:!0})]}),Object(O.jsx)("br",{}),Object(O.jsxs)("div",{className:"form-group",children:[Object(O.jsx)("label",{children:"Password:"}),Object(O.jsx)("br",{}),Object(O.jsx)("input",{type:"password",name:"password",value:c.password,onChange:v,required:!0})]}),r&&Object(O.jsx)("div",{className:"form-group",children:Object(O.jsx)("div",{className:p?"alert alert-success":"alert alert-danger",role:"alert",children:r})}),Object(O.jsx)("br",{}),Object(O.jsx)("button",{className:"btn btn-primary btn-block",type:"submit",children:"Sign Up"}),Object(O.jsx)("br",{}),Object(O.jsx)(a.b,{to:"/signin",children:"Click here to Sign In"})]})})})};var T=function(){return Object(O.jsx)("div",{children:Object(O.jsxs)(s.c,{children:[Object(O.jsx)(s.a,{exact:!0,path:"/",component:m}),Object(O.jsx)(s.a,{exact:!0,path:"/signup",component:v}),Object(O.jsx)(s.a,{exact:!0,path:"/signin",component:x}),Object(O.jsx)(s.a,{render:function(){return Object(O.jsx)("h1",{children:"404 Error"})}})]})})},y=function(n){n&&n instanceof Function&&c.e(3).then(c.bind(null,71)).then((function(t){var c=t.getCLS,e=t.getFID,i=t.getFCP,h=t.getLCP,s=t.getTTFB;c(n),e(n),i(n),h(n),s(n)}))};c(66);h.a.render(Object(O.jsx)(a.a,{basename:"/vietidols",children:Object(O.jsx)(T,{})}),document.getElementById("root")),y()}},[[67,1,2]]]);
//# sourceMappingURL=main.a9bcc3dc.chunk.js.map