import { OrganizationProfile, OrganizationSwitcher } from "@clerk/nextjs";

export default function Home() {
  return (
    <main className="flex flex-col grow py-6 px-8 bg-zinc-50 container text-gray-900">
      <div className="border-l-amber-300 border-l-[1rem] pl-6">
        <p className="text-xl">Please use the components on this page to test webhooks.</p>
      </div>
      <div className="grid grid-cols-1 gap-6 mt-6" >
        <p>signup - user.created, possibly email.created and sms.created, session.created</p>
        <p>signin - session.created, possibly email.created and sms.created</p>
        <p>signout - session.ended</p>
        <p>update your profile - user.created</p>
        <p>self delete or delete user from Dashboard - user.deleted</p>
        <p>create org - organizaation.created, organizationMembership.created, possibly organizationInvitation.created, email.created</p>
        <p>delete org - organization.deleted</p>
        <p>update org (org profile( - organization.update)</p>
        <p>create Org invitation - organizationInvitation.created, email.created</p>
        <p>delete Org invitation from Organization Profile - organizationInvitation.revoked</p>
        <p>accept Org Invite - organizationInvitation.accepted, email.created</p>
        <p>join an Org - organizationMembership.created</p>
        <p>update a Org member's role - organizationMembership.updated</p>
        <p>remove member from Org, or self leave - organizationMembership.deleted</p>
      </div>
      <div className="mt-16 my-8">
        <h2 className="text-xl">Organization Switcher</h2>
        <OrganizationSwitcher />
      </div>
      <div className="my-8">
        <h2 className="text-xl">Organization Profile</h2>
        <OrganizationProfile />
      </div>

    </main>
  )
}
