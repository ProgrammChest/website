/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

 import React, {ReactNode} from 'react';
 import Translate from '@docusaurus/Translate';
 import Link from '@docusaurus/Link';
 
 function WebsiteLink({to, children}: {to: string; children?: ReactNode}) {
   return (
     <Link to={to}>
       {children || (
         <Translate id="team.profile.websiteLinkLabel">website</Translate>
       )}
     </Link>
   );
 }
 
 interface ProfileProps {
   className?: string;
   name: string;
   children: ReactNode;
   githubUrl?: string;
   youtubeUrl?: string;
   avatarUrl?: string;
   twitterUrl?: string;
 }
 
 function TeamProfileCard({
   className,
   name,
   children,
   githubUrl,
   twitterUrl,
   youtubeUrl,
   avatarUrl
 }: ProfileProps) {
   return (
     <div className={className}>
       <div className="card card--full-height">
         <div className="card__header">
           <div className="avatar avatar--vertical">
             <img
               className="avatar__photo avatar__photo--xl margin--md"
               src={avatarUrl ?? `${githubUrl}.png`}
               alt={`${name}'s avatar`}
             />
             <div className="avatar__intro">
               <h3 className="avatar__name">{name}</h3>
             </div>
           </div>
         </div>
         <div className="card__body">{children}</div>
         <div className="card__footer">
             {youtubeUrl && (
               <a className="button button--danger button--block" href={youtubeUrl}>
                 YouTube
               </a>
             )}
           <div className="button-group button-group--block margin--md">
             {githubUrl && (
               <a className="button button--secondary" href={githubUrl}>
                 GitHub
               </a>
             )}
             {twitterUrl && (
               <a className="button button--secondary" href={twitterUrl}>
                 Twitter
               </a>
             )}
           </div>
         </div>
       </div>
     </div>
   );
 }
 
 function TeamProfileCardCol(props: ProfileProps) {
   return (
     <TeamProfileCard {...props} className="col col--4 margin-bottom--lg" />
   );
 }
 
 export function AdminTeamRow(): JSX.Element {
   return (
     <div className="row">
     <TeamProfileCardCol
      avatarUrl="https://cdn.discordapp.com/avatars/336889257488547841/37940dca0903f22b034e586c5347f682.webp"
       name="CodeDoctor#8719"
       githubUrl="https://github.com/CodeDoctorDE"
       twitterUrl="https://twitter.com/CodeDoctorDE"
       youtubeUrl="https://www.youtube.com/channel/UCzaPZfCZulC83b-gcK4l9EA">
     </TeamProfileCardCol>
     <TeamProfileCardCol
      avatarUrl="https://cdn.discordapp.com/avatars/531440361986588682/a_d6470f05d4fa75afc86c5564c882355a.gif"
       name="FreshVlay#2778"
       githubUrl="https://github.com/FreshVlay"
       youtubeUrl="https://www.youtube.com/channel/UC-2nxSBp5LLD92GNSKiuPOw">
     </TeamProfileCardCol>
     </div>
   );
 }
 
 export function DevTeamRow(): JSX.Element {
   return (
     <div className="row">
     <TeamProfileCardCol
      avatarUrl="https://cdn.discordapp.com/avatars/530450131179405344/01d1772c0afa2da088cfc0741abf6de0.webp"
       name="Rapha#2626">
     </TeamProfileCardCol>
     </div>
   );
 }
 
 export function ModTeamRow(): JSX.Element {
   return (
     <div className="row">
     <TeamProfileCardCol
      avatarUrl="https://cdn.discordapp.com/avatars/686941073792303157/e5cf4332e3c5d438528a2a70c3c23862.webp"
       name="Kaki#8179"
       githubUrl="https://github.com/Kakiking">
     </TeamProfileCardCol>
     <TeamProfileCardCol
      avatarUrl="https://cdn.discordapp.com/avatars/737996127978127381/ee71f4a84fe5f32cc36e1c72b1fab0f9.webp"
       name="luhahn#0330"
       githubUrl="https://github.com/luhahn">
     </TeamProfileCardCol>
     <TeamProfileCardCol
      avatarUrl="https://cdn.discordapp.com/avatars/201048039970832385/f713d6773e6ba99443165a4691593808.webp"
       name="BasicBit#8819">
     </TeamProfileCardCol>
     </div>
   );
 }
 
 export function SupTeamRow(): JSX.Element {
   return (
     <div className="row">
       <TeamProfileCardCol
        avatarUrl="https://cdn.discordapp.com/avatars/632560961772978176/d6b2a0f6705c4317489167481f18e23b.webp"
         name="Gamer_4016#4166">
       </TeamProfileCardCol>
       <TeamProfileCardCol
        avatarUrl="https://cdn.discordapp.com/avatars/285446674648793088/811aafc3a9fbca19cbe7008b6ad19141.webp"
         name="AnderCrafter#1858">
       </TeamProfileCardCol>
       <TeamProfileCardCol
        avatarUrl="https://cdn.discordapp.com/avatars/717767186416140298/3c67a2bf952e8391b24b607f3082a10c.webp"
         name="Kartoffel TV_YT#8767">
       </TeamProfileCardCol>
     </div>
   );
 }