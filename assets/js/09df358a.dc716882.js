"use strict";(self.webpackChunkevantay_com=self.webpackChunkevantay_com||[]).push([[272],{2324:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=t(7624),s=t(2172);const a={title:"Overseerr, le demandeur",author:"Mathieu Bannwarth",author_url:"https://github.com/WhiteRoseLK/",author_title:"Cybersecurity IT engineer",author_image_url:"https://avatars.githubusercontent.com/u/50756181"},i=void 0,l={id:"homelab/arr/2024-06-10-Overseerr",title:"Overseerr, le demandeur",description:"Overseerr joue le r\xf4le d'interface. Il permet de demander des films ou des s\xe9ries afin de les t\xe9l\xe9charger.",source:"@site/docs/homelab/arr/2024-06-10-Overseerr.md",sourceDirName:"homelab/arr",slug:"/homelab/arr/2024-06-10-Overseerr",permalink:"/docs/homelab/arr/2024-06-10-Overseerr",draft:!1,unlisted:!1,tags:[],version:"current",frontMatter:{title:"Overseerr, le demandeur",author:"Mathieu Bannwarth",author_url:"https://github.com/WhiteRoseLK/",author_title:"Cybersecurity IT engineer",author_image_url:"https://avatars.githubusercontent.com/u/50756181"},sidebar:"docsSidebar",previous:{title:"Media Player",permalink:"/docs/homelab/arr/"},next:{title:"Plex, le lecteur",permalink:"/docs/homelab/arr/2024-06-10-Plex"}},o={},c=[{value:"Installation",id:"installation",level:2},{value:"Configuration",id:"configuration",level:2}];function u(e){const r={code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,s.M)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.p,{children:"Overseerr joue le r\xf4le d'interface. Il permet de demander des films ou des s\xe9ries afin de les t\xe9l\xe9charger."}),"\n",(0,n.jsx)(r.h2,{id:"installation",children:"Installation"}),"\n",(0,n.jsx)(r.p,{children:"Le fichier d'installation est simple, il r\xe9cup\xe8re et ex\xe9cute un script permettant d'installer Overseerr."}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-YAML",metastring:'title="tasks/main.yml"',children:"---\n# tasks file for Overseerr\n- name: Install snapd\n  apt:\n    name: snapd\n    state: present\n\n- name: Install Overseerr\n  snap:\n    name: \n      - overseerr\n"})}),"\n",(0,n.jsx)(r.h2,{id:"configuration",children:"Configuration"}),"\n",(0,n.jsxs)(r.p,{children:["Si l'installation s'est bien pass\xe9e, le serveur Overseerr est accessible sur le port ",(0,n.jsx)(r.strong,{children:"5055"}),"."]}),"\n",(0,n.jsx)(r.p,{children:"A la premi\xe8re connnexion on nous demande de nous connecter avec notre comple Plex."}),"\n",(0,n.jsx)(r.p,{children:"Il suffit alors de lier le serveur Plex puis les serveurs Radarr et Sonarr."})]})}function d(e={}){const{wrapper:r}={...(0,s.M)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(u,{...e})}):u(e)}},2172:(e,r,t)=>{t.d(r,{I:()=>l,M:()=>i});var n=t(1504);const s={},a=n.createContext(s);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function l(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);