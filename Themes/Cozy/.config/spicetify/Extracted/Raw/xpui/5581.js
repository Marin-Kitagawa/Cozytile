"use strict";(("undefined"!=typeof self?self:global).webpackChunkopen=("undefined"!=typeof self?self:global).webpackChunkopen||[]).push([[5581],{75581:(e,t,n)=>{n.r(t),n.d(t,{default:()=>Pe});var a=n(59496),i=n(90641),s=n(92053),r=n(33608),l=n(79334),o=n(58767),c=n(60378),d=n(40401),u=n(43234),m=n(75115),h=n(32135),g=n(86847),x=n(62256),y=n(23534),p=n(48947),f=n(92548),b=n(27509),I=n(85345),j=n(76017),R=n(78891),v=n(67551),k=n(77741),C=n(94940),P=n(69555),w=n(58212),E=n(55114),U=n(40822),T=n(57142),A=n(23949),S=n(78061),B=n(65905),F=n(35804),_=n(40055),N=n(4435),D=n(35595),M=n(53942),L=n(80772),O=n(59634),z=n(44771),$=n(46828),K=n(27203),J=n(12159),X=n(20863),Z=n(44135),Q=n(23924),H=n(59362),G=n(24211),V=n(84875),W=n.n(V),Y=n(40530);const q="TRDgmejiOzKjissuLFSx";var ee=n(4637);const te=({onClick:e=(()=>{}),className:t,label:n,ariaLabel:a=n,Icon:i})=>(0,ee.jsx)(Y._,{label:n,children:(0,ee.jsx)("button",{type:"button","aria-label":a,className:W()(q,t),onClick:e,children:(0,ee.jsx)(i,{iconSize:16})})});var ne=n(42774);const ae=a.memo((function({uri:e,uid:t,name:n,durationMs:a,artists:i,album:s,isMOGEFRestricted:r,isExplicit:l,isPlayable:d,index:u,playIndex:m=null,imgUrl:h,contextUri:g,usePlayContextItem:x,isEnhanced:y,playContextPageIndex:p,isFirstRecommendation:f,add:b,remove:I,canBeRemovedFromPlaylist:j,addedBy:R,addedAt:v}){const C=(0,Q._)(e),P=(0,ne.k)(e,d),{badges:E,hasBadges:U}=(0,H.r)({downloadAvailability:C,isExplicit:l,isMOGEFRestricted:r,isEnhanced:y}),T=u+1,A=i.items.map((e=>({uri:e.uri,name:e.profile.name}))),B=(0,ee.jsx)(M.$,{uri:e,uid:t,albumUri:s?.uri,artists:A,contextUri:g,isRecommendation:y,removePlaylistItems:()=>I([t]),removeRecommendation:()=>I([t]),addRecommendation:()=>b(t),canBeRemovedFromPlaylist:j}),V=A?.map((e=>e.name)).join(c.ag.getSeparator())||"",{isActive:W,isPlaying:Y,triggerPlay:q,togglePlay:ae}=x({uid:t,uri:e,index:m??u,pageIndex:p}),{spec:ie,logger:se}=(0,k.fU)(w.createDesktopTrackListRowEventFactory,{data:{position:u,reason:"",uri:e}}),re=(0,ee.jsx)(te,{onClick:()=>{b(t),se.logInteraction(ie.addRecommendationButtonFactory().hitAddToPlaylist({playlist:g,itemToBeAdded:e}))},label:c.ag.get("web-player.enhance.button_label_keep_in_playlist"),Icon:_.G});return(0,ee.jsx)(S.ZP,{value:"row",index:u,children:(0,ee.jsx)(K._P,{menu:B,children:(0,ee.jsxs)($.c,{uri:e,contextUri:g,index:u,onTriggerPlay:(e,t)=>{q({loggingParams:t})},isActive:W,ariaRowIndex:u+1,isPlayable:P,ageRestricted:r,dragMetadata:{name:n,createdBy:V},spec:ie,removePlaylistItems:e=>I(e.map((e=>e.uid))),children:[(0,ee.jsx)(O.Dd,{ariaColIndex:0,children:(0,ee.jsx)(O.Du,{uri:e,playAriaLabel:c.ag.get("tracklist.a11y.play",n,V),onClick:(e,t)=>{ae({loggingParams:t})},isPlaying:Y,isActive:W,spec:ie,children:(0,ee.jsx)(O.km,{children:T})})}),(0,ee.jsxs)(O.vZ,{ariaColIndex:1,children:[(0,ee.jsx)(O.lD,{src:h}),(0,ee.jsxs)(O.vm,{children:[(0,ee.jsx)(O.Wh,{titleText:n,children:n}),U&&(0,ee.jsxs)(O.g3,{children:[E.enhanced&&(0,ee.jsx)(N._,{iconSize:16,className:z.Z.enhanced,title:c.ag.get("web-player.enhance.button_text_enhanced"),"aria-label":c.ag.get("web-player.enhance.button_text_enhanced")}),E.download&&(0,ee.jsx)(J.G,{size:16}),E.explicit&&(0,ee.jsx)(X.N,{}),E.paid&&(0,ee.jsx)(L.g,{}),E.nineteen&&(0,ee.jsx)(Z.X,{className:z.Z.nineteen,size:16})]}),(0,ee.jsx)(O.K9,{children:(0,ee.jsx)(O.T6,{artists:A,spec:ie})})]})]}),(0,ee.jsx)(O.UA,{ariaColIndex:2,children:s&&(0,ee.jsx)(O.BM,{uri:s.uri,name:s.name,creatorUri:A?.[0]?.uri,spec:ie,children:s.name})}),(0,ee.jsx)(O.UA,{ariaColIndex:3,children:(0,ee.jsx)(O.p_,{name:R?.name||R?.id||"",uri:R?.id&&(0,o.QK)(R.id).toURI()||"",imageUrl:R?.avatar?.sources&&(0,F.X)(R?.avatar?.sources,{desiredWidth:24,desiredLabel:"small"})?.url||"",showAvatar:!0})}),(0,ee.jsx)(O.UA,{ariaColIndex:4,children:v?(0,ee.jsx)(O.Op,{dateAdded:v}):null}),(0,ee.jsxs)(O.mU,{ariaColIndex:5,children:[y?(0,ee.jsxs)(ee.Fragment,{children:[f?(0,ee.jsx)(G.T,{id:"enhance-add-recommendation",bodyText:c.ag.get("web-player.enhance.onboarding.add-recommendation-to-playlist"),shouldScrollIntoView:!0,children:re}):re,(0,ee.jsx)(te,{onClick:()=>{I([t]),se.logInteraction(ie.removeRecommendationButtonFactory().hitRemoveRecommendation({recommendedItemUri:e,contextUri:g}))},label:c.ag.get("web-player.enhance.button_label_remove_from_playlist"),Icon:D.H})]}):(0,ee.jsx)(O.qS,{uri:e,type:"track",spec:ie}),(0,ee.jsx)(O.A$,{duration:a}),(0,ee.jsx)(O.Zv,{menu:B,label:c.ag.get("more.label.track",n,V),spec:ie})]})]})})})})),ie=[T.Q.INDEX,T.Q.TITLE,T.Q.ALBUM,T.Q.ADDED_BY,T.Q.ADDED_AT,T.Q.DURATION],se=a.memo((function({ariaLabel:e,uri:t,name:n,usePlayContextItem:i,tracklistRef:s,fetchTracks:r,addRecommendation:l,removeItems:o,nrTracks:d,canBeRemovedFromPlaylist:u}){const m=(0,a.useRef)(!1),h=(0,A.k)();(0,a.useEffect)((()=>{m.current&&h&&s?.current?.update(),m.current=!0}),[h,s]);const g=50,x=(0,a.useRef)((()=>{})),[y,p]=(0,a.useState)([]),{logger:f,spec:b,UBIFragment:I}=(0,k.fU)(P.createDesktopTrackListEventFactory,{data:{uri:t,identifier:"enhanced-tracklist"}}),j=(0,a.useCallback)((()=>{if(s&&s.current){const{firstIndex:e,lastIndex:t}=s.current.getVisibleTrackWindow(),n=t-e;return Math.max(0,e-Math.round((g-n)/2))}return 0}),[s]),R=(0,a.useCallback)((e=>{x.current(),o({itemIds:e.map((({uid:e})=>e)),offset:j(),limit:g});const n=new Set(e.map((({uid:e})=>e))),a=s?.current?.getRows()||[],i=[];if(a.forEach(((e,t)=>{if(e&&n.has(e.uid)){const n={index:t,item:e};e.isEnhanced&&i.push(n)}})),i.length){let e;e=1===i.length?(0,w.createDesktopTrackListRowEventFactory)({data:{uri:i[0].item.uri,position:i[0].index,reason:""}}).removeRecommendationButtonFactory().hitRemoveRecommendation({contextUri:t,recommendedItemUri:i[0].item.uri}):b.removeItemsButtonFactory().hitRemoveRecommendations({contextUri:t,numberOfRecommendationsToRemove:i.length}),e&&f.logInteraction(e)}}),[o,j,f,s,t,b]),v=(0,a.useCallback)((async(e,t)=>({items:await r(e,t),totalLength:d})),[r,d]),C=(0,a.useCallback)(((e,t)=>{x.current=t,e.length>1?p(e):R(e)}),[R]),T=(0,a.useCallback)((e=>{l({itemIds:[e],offset:j(),limit:g})}),[l,j]),_=(0,a.useCallback)((e=>{o({itemIds:e,offset:j(),limit:g})}),[o,j]),N=(0,a.useCallback)((function(e,n){const a=(0,F.X)(e.albumOfTrack?.coverArt?.sources,{desiredSize:40,desiredLabel:"small"});return(0,ee.jsx)(ae,{index:n,playIndex:n,contextUri:t,uri:e.uri,uid:e.uid,isPlayable:e.playability.playable,durationMs:e.duration.totalMilliseconds,name:e.name,artists:e.artists,album:e.albumOfTrack,isExplicit:e.contentRating?.label===B.KS.Explicit,isMOGEFRestricted:e.contentRating?.label===B.KS.NineteenPlus,imgUrl:a?.url||"",usePlayContextItem:i,isEnhanced:e.isEnhanced,playContextPageIndex:e.playContextPageIndex,isFirstRecommendation:e.isFirstRecommendationOfPage&&n<g,add:T,remove:_,canBeRemovedFromPlaylist:u,addedBy:e.addedBy,addedAt:e.addedAt},e.uid)}),[i,t,T,_,u]),D=(0,a.useCallback)((e=>e.uri),[]),M=(0,a.useCallback)((e=>e.uid),[]);return(0,ee.jsxs)(I,{spec:b,children:[(0,ee.jsx)(S.ZP,{value:"playlist-tracklist",children:(0,ee.jsx)(U.Pv,{testID:"playlist-tracklist",ariaLabel:e,hasHeaderRow:!0,columns:ie,onRemove:C,renderRow:N,resolveUri:D,resolveUid:M,nrTracks:d,fetchTracks:v,limit:g,outerRef:s},t)}),(0,ee.jsx)(E.h,{title:c.ag.get("playlist.remove_from_playlist",n),isOpen:y.length>0,tracks:y,onClose:e=>{e.stopPropagation(),p([])},onRemove:R})]})}));var re=n(92987),le=n(55813),oe=n(91943),ce=n(56243),de=n(73549),ue=n(81117),me=n(98365);const he="z9JdxJgW3OxYysR2dkal";function ge(e){return"function"==typeof e}const xe=function({contextUri:e,title:t,message:n,children:i}){const s=(0,a.useRef)(null),[r,l]=(0,a.useState)(!1),[o,d]=(0,a.useState)("topStart"),u=(0,a.useCallback)((()=>{l(!1),s.current?.focus()}),[]),m=(0,a.useCallback)((()=>{l(!0)}),[]),{setIsEnhanced:h}=(0,me.U)(e),g=(0,a.useRef)(null);return(0,a.useEffect)((()=>{if(g.current){if(!g.current)return;const{top:e,bottom:t}=g.current.getBoundingClientRect(),n=16;e<n?d("bottomStart"):t>window.innerHeight-n&&d("topStart")}}),[r]),(0,ee.jsx)(re.x,{onShow:m,onHide:u,placement:o,withPortal:!0,overlay:r&&(0,ee.jsx)(ue.i,{children:(0,ee.jsx)("div",{className:"encore-dark-theme",ref:g,children:(0,ee.jsxs)(le.J,{role:"alertdialog",popoverTitle:t,arrow:"topStart"===o?"bottomEnd":"topEnd",colorSet:"announcement",children:[n,(0,ee.jsxs)("div",{className:he,children:[(0,ee.jsx)(oe.o,{buttonSize:ce.z.sm,onClick:u,children:c.ag.get("web-player.enhance.missing-functionality-callout.dismiss")}),(0,ee.jsx)(de.D,{buttonSize:ce.z.sm,onClick:()=>{u(),h(!1)},colorSet:"invertedLight",children:c.ag.get("web-player.enhance.missing-functionality-callout.turn-off-enhance")})]})]})})}),children:ge(i)?(0,ee.jsx)(ee.Fragment,{children:i(m)}):i})};var ye=n(37611),pe=n(99811),fe=n(67613),be=n(56936),Ie=n(84096);var je=n(15080),Re=n(96186),ve=n(19252);const ke="A4dupilHPIEDfhXDE0m0",Ce="JYAfUd8XXrVwcPbq9QaC",Pe=a.memo((function({metadata:e,capabilities:t,featureIdentifier:n}){const{uri:P,name:w,images:E,totalLength:U}=e,[T]=E,A=(0,j.Z)(T?.url||null),S=(0,s.TH)(),B=(0,s.ur)(),F=(0,i.I0)(),_=(0,I.o)(),N=(0,a.useRef)(null),D=(0,o.nK)(P),{isEnhanced:M,playContext:L,numTotalItems:O,numTotalRecs:z,addRecommendation:$,removeItems:K,fetchTracks:J,enhancedInvalidationKey:X,shouldUnderlyingContextChangeRefreshView:Z,UBIReason:Q,clearCache:H,fetchIndexOfItemId:G}=function(e){const t=(0,Ie._)(),{isEnhanced:n,iteration:i,setIsEnhanced:s,toggleIsEnhanced:r}=(0,me.U)(e),[l,o]=(0,a.useState)(null),c=(0,a.useRef)(Date.now()),d=(0,a.useCallback)((()=>Date.now()-c.current>3e3),[]),u=(0,a.useRef)({}),m=(0,a.useRef)(null),h=(0,a.useCallback)((async(e,n,a,i,s,r,l)=>{r&&(c.current=Date.now());const d=m.current?.enhancedRevision;let h;try{h=await l}catch(r){409===r?.status&&(h=await t.getPage(e,n,a,i,s))}const g=h?.enhancePage;if(!g)return[];const{pageItems:x,...y}=g,p=await t.decoratePageItems(x);return d!==m.current?.enhancedRevision?[]:(m.current?.enhancedRevision!==y.enhancedRevision&&(r=!0),u.current=function(e,t,n,a){const i=a?{}:{...e};return t.forEach(((e,t)=>{i[n+t]=e})),i}(u.current,p,i,r),o(y),m.current=y,p)}),[t]),g=(0,a.useCallback)((async({itemIds:n,offset:a=0,limit:s=1})=>{m.current&&i&&h(e,i,m.current.sessionId,a,s,!0,t.addRecommendation(e,m.current.sessionId,n,a,s))}),[h,e,t,i]),x=(0,a.useCallback)((async({itemIds:n,offset:a=0,limit:s=1})=>{if(!m.current||!i)return;const r=u.current,l=new Set(n);let o=!1;for(const e in r)if(l.has(r[e].uid)&&r[e].isEnhanced){o=!0;break}h(e,i,m.current.sessionId,a,s,!0,t.removeItems(e,m.current.sessionId,n,a,s,o))}),[h,e,t,i]),y=(0,a.useMemo)((()=>new be.tL),[]),p=(0,a.useCallback)((async(n,a)=>{if(!i)return[];const s=Math.min(a,(m.current?.numTotalItems||1/0)-n),r=Array.from({length:s},((e,t)=>u.current[t+n]));return r.every((e=>!!e))&&0!==s?r:h(e,i,m.current?.sessionId,n,a,!1,y.create(`${e}:${i}:${m.current?.sessionId}:${n}:${a}`,(()=>t.getPage(e,i,m.current?.sessionId,n,a))))}),[y,h,e,t,i]),f=(0,a.useMemo)((()=>({uri:e,url:l?.dspContextUri})),[e,l?.dspContextUri]),b=(0,a.useCallback)((()=>{u.current={}}),[]),I=(0,a.useCallback)((async n=>{if(!i)return-1;const{enhancePage:a}=await t.getPage(e,i,m.current?.sessionId,0,t.MAX_PAGE_SIZE);return a?.pageItems.findIndex((e=>e.itemId===n))??-1}),[t,i,e]);return{isEnhanced:n,setIsEnhanced:s,toggleIsEnhanced:r,addRecommendation:g,removeItems:x,playContext:f,numTotalItems:isNaN(Number(l?.numTotalItems))?void 0:Number(l?.numTotalItems),numTotalRecs:isNaN(Number(l?.numTotalRecs))?void 0:Number(l?.numTotalRecs),fetchTracks:p,clearCache:b,enhancedInvalidationKey:`${l?.enhancedRevision??""}${i??""}`,shouldUnderlyingContextChangeRefreshView:d,UBIReason:l?`enhanced|${l?.sessionId}#${l?.logging?.correlationId}`:"enhanced|",fetchIndexOfItemId:I}}(P),V=(O??U)>0,W=t?.canFilter&&U>0,Y=t?.canSort&&U>0;(0,a.useEffect)((()=>{if(M&&"POP"!==B){const e=new URLSearchParams(S.search).get("uid");if(!e)return;G(e).then((e=>{-1!==e&&N.current?.scrollToIndex(e)}))}}),[G,M,B,S.search]),(0,a.useEffect)((()=>{X&&N.current?.update()}),[X]),(0,a.useEffect)((()=>{Z()&&(H(),N.current?.update())}),[U,H,Z]);const{spec:q,logger:te,UBIFragment:ne}=(0,k.fU)(r.createDesktopEnhancedEventFactory,{data:{uri:P,identifier:"enhanced-session",reason:Q}}),ae=(0,a.useMemo)((()=>({header:q.headerFactory()})),[q]),{isPlaying:ie,isActive:re,togglePlay:le,usePlayContextItem:oe}=(0,v.n)(L,{featureIdentifier:n}),ce=(0,a.useCallback)((()=>{let e;le(),e=re?ie?q.playButtonFactory().hitPause({itemToBePaused:P}):q.playButtonFactory().hitResume({itemToBeResumed:P}):q.playButtonFactory().hitPlay({itemToBePlayed:P}),te.logInteraction(e)}),[le,ie,re,te,q,P]),de=function(e=0){const{data:t}=(0,je.J)(Re.n5.getUser,["spotify"]);return(0,a.useMemo)((()=>t?.body?{isOwner:!1,tracksAdded:e,user:{uri:t.body.uri,type:ve.p.USER,username:t.body.id,displayName:t.body.display_name,images:t.body.images}}:null),[t,e])}(z),ue=e.collaborators?.items?.concat()??[];de&&ue.splice(ye.ms-1,0,de);const he={count:ue.length,items:ue},ge=(0,a.useCallback)(((e,t)=>{const n=[...t[b.aN[o.JM.ALBUM]]||[],...t[b.aN[o.JM.TRACK]]||[]];n.length>0&&(F((0,d.jV)(P,n)),_({targetUri:P,intent:"add",type:"drop"}))}),[F,_,P]);return(0,ee.jsx)(a.Suspense,{fallback:null,children:(0,ee.jsx)(fe.e,{pageId:l.Wg.ENHANCED_SESSION,children:(0,ee.jsxs)(ne,{spec:q,children:[(0,ee.jsx)(x.$,{children:c.ag.get("playlist.page-title",w)}),(0,ee.jsx)(g.Z,{types:[b.aN[o.JM.ALBUM],b.aN[o.JM.TRACK]],onDrop:ge,children:(0,ee.jsxs)("section",{role:"presentation",className:ke,"data-testid":"enhanced-page",children:[(0,ee.jsxs)(ne,{spec:ae.header,children:[(0,ee.jsx)(f.s,{metadata:{...e,collaborators:he,duration:void 0,totalLength:O??U},isPlaying:ie,togglePlay:ce,backgroundColor:A}),(0,ee.jsx)("div",{children:(0,ee.jsx)(u.o,{backgroundColor:A,children:(0,ee.jsxs)(u.F,{children:[V?(0,ee.jsx)(y.$,{onClick:ce,isPlaying:ie,size:"lg",uri:P}):null,(0,ee.jsx)(C.v,{uri:P}),D&&(0,ee.jsx)(R.y,{menu:(0,ee.jsx)(h.X,{uri:P,isEnhanced:M}),children:(0,ee.jsx)(m.z,{})}),(W||Y)&&(0,ee.jsxs)("div",{className:Ce,children:[W&&(0,ee.jsx)(a.Suspense,{fallback:null,children:(0,ee.jsx)(xe,{contextUri:P,title:c.ag.get("web-player.enhance.missing-functionality-callout.filtering-playlist-disabled-title"),message:c.ag.get("web-player.enhance.missing-functionality-callout.filtering-playlist-disabled-message"),children:e=>(0,ee.jsx)(pe.K,{placeholder:c.ag.get("playlist.search_in_playlist"),onActivate:()=>(e(),!1)})})}),Y&&(0,ee.jsx)(xe,{contextUri:P,title:c.ag.get("web-player.enhance.missing-functionality-callout.sorting-playlist-disabled-title"),message:c.ag.get("web-player.enhance.missing-functionality-callout.sorting-playlist-disabled-message"),children:(0,ee.jsx)(p.l,{columns:[],disabled:!0})})]})]})})})]}),(0,ee.jsx)("div",{className:"contentSpacing",children:(0,ee.jsx)(a.Suspense,{fallback:null,children:(0,ee.jsx)(se,{ariaLabel:w,nrTracks:O??Math.max(15,U),uri:P,name:w,usePlayContextItem:oe,tracklistRef:N,fetchTracks:J,addRecommendation:$,removeItems:K,canBeRemovedFromPlaylist:D},P)})})]})})]})})})}))}}]);
//# sourceMappingURL=5581.js.map