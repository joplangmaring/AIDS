import React from "react";
import hiv_stigma from "../../../../assets/PEP.jpg";
import Image from "next/image";

const page = () => {
  return (
    <div className="py-10 md:mx-auto md:w-3/4 px-5 space-y-5">
      <Image
        src={hiv_stigma}
        alt="HIV STIGMA"
        width="0"
        height="0"
        sizes="100vw"
        className="w-full md:h-[60vh] object-cover  object-center mx-auto"
      />
      <h1 className="text-4xl font-bold text-[#8B0000] mt-10">
        STIGMA SCENARIOS
      </h1>

      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">Family</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
          Scenario 1: Rejection and Isolation A person discloses their HIV
          status to a family member, but they react with fear, avoidance, and
          judgment. The family member refuses to allow the person to stay in
          their home or participate in family gatherings, leading to feelings of
          rejection and isolation.
        </li>
        <li>
          Scenario 2: Denial and Silence A family refuses to acknowledge the HIV
          diagnosis, and the individual is not allowed to openly discuss their
          health condition. This results in a lack of support and emotional
          distress for the person living with HIV, who may feel as though their
          illness is a taboo subject in the household.
        </li>
        <li>
          Scenario 3: Blame and Shame A family member accuses the person living
          with HIV of bringing shame to the family. The individual is blamed for
          contracting HIV, and the family may make hurtful comments or insinuate
          that they are morally responsible for their condition, reinforcing
          feelings of guilt.
        </li>
      </ul>
      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">Friends</h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
          Scenario 1: Fear of Transmission A person discloses their HIV status
          to a friend, and the friend reacts with fear, asking whether they are
          at risk of contracting HIV from casual contact, such as shaking hands
          or hugging. The friend distances themselves and avoids physical
          interaction, even though HIV is not transmitted in these ways.
        </li>
        <li>
          Scenario 2: Avoidance of Social Gatherings A person with HIV is not
          invited to social events anymore. Friends make excuses, saying it’s
          because of the individual’s health condition, but the true reason is
          an underlying fear of HIV transmission or discomfort around the
          diagnosis.
        </li>
        <li>
          Scenario 3: Gossip and Stigma A friend discloses the HIV status of
          another friend to others, violating their privacy. This leads to
          gossip within the social circle, making the person with HIV feel
          stigmatized and betrayed by someone they trusted.
        </li>
      </ul>
      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
        Workplace
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
          Scenario 1: Discrimination and Harassment An employee discloses their
          HIV status to their employer, but they are met with discrimination.
          The employer assigns them fewer responsibilities, isolates them from
          the team, or even terminates their employment, citing concerns about
          their health status without considering their ability to perform work.
        </li>
        <li>
          Scenario 2: Reduced Opportunities A person living with HIV notices
          that they are passed over for promotions, challenging projects, or
          career advancement. Colleagues and supervisors treat them as less
          competent or capable due to their health status, even though HIV does
          not affect their job performance.
        </li>
        <li>
          Scenario 3: Workplace Gossip A colleague learns about someone's HIV
          status and begins to spread rumors about it within the office. The
          person with HIV feels stigmatized and uncomfortable, leading to a
          decrease in their self-esteem and productivity due to the hostile
          environment.
        </li>
      </ul>
      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
        Partners
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
          Scenario 1: Fear of Intimacy A person discloses their HIV status to
          their romantic partner, and the partner reacts with fear, refusing to
          engage in sexual intimacy or using protection. The partner' s fear
          stems from misinformation about HIV transmission, leading to emotional
          distancing in the relationship.
        </li>
        <li>
          Scenario 2: Betrayal and Blame A partner accuses the person living
          with HIV of betraying them, questioning where they contracted the
          virus. The blame is placed on the individual, with no recognition that
          HIV can be contracted in a variety of ways and that it is not an
          indication of infidelity or moral failure.
        </li>
        <li>
          Scenario 3: Emotional Rejection A person with HIV discloses their
          status, but their partner responds by saying they cannot be in a
          relationship with someone who is HIV-positive. This emotional
          rejection creates a deep sense of abandonment, even though the person
          living with HIV is otherwise healthy and has an undetectable viral
          load.
        </li>
      </ul>
      <h2 className="text-lg font-bold md:text-left text-[#8B0000]">
        Community
      </h2>
      <ul className="list-disc list-inside text-gray-700">
        <li>
          Scenario 1: Social Exclusion A person living with HIV is excluded from
          community events, activities, or social circles due to fear or
          misunderstanding of the virus. Neighbors and local organizations may
          shun the person, leaving them feeling marginalized and isolated from
          their own community.
        </li>
        <li>
          Scenario 2: Public Stigma and Discrimination A person with HIV faces
          verbal abuse or ridicule in public spaces, such as being taunted or
          mocked when others discover their status. They may experience bullying
          or harassment due to the stigma associated with HIV.
        </li>
        <li>
          Scenario 3: Limited Access to Support Services In some communities,
          people living with HIV may not have access to local healthcare
          services or social support due to the stigma surrounding the
          condition. Healthcare providers or local support groups may turn them
          away, citing their status or treating them with judgment, further
          alienating the person in need of help.
        </li>
      </ul>
    </div>
  );
};

export default page;
