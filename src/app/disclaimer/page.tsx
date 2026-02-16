import Link from "next/link";

const page = () => {
  return (
    <div className="lg:px-32 md:px-16 px-4 my-16">
      <div className="font-semibold">
        For the Terms and Conditions governing use of MDCalc&lsquo;s Services,
        please visit{" "}
        <Link
          href={"https://www.mdcalc.com/terms-and-conditions"}
          target="_blank"
          className="text-blue-500"
        >
          https://www.mdcalc.com/terms-and-conditions
        </Link>{" "}
        on the website and the Terms and Conditions within the “More” section in
        the App.
      </div>

      <section className="space-y-6 my-4">
        <h1 className="text-3xl font-bold">Disclaimer</h1>
        <p>Effective Date: 3 July 2025</p>
        <h2 className="text-2xl font-bold">In Plain English:</h2>

        <p>
          The online clinical tools and content offered by MDCalc are strictly
          for use by medical professionals. As a trained medical professional,
          you must double-check your work, and trust your clinical judgment. For
          example, if the Glasgow Coma Scale result is 14/15, but the patient is
          obtunded, you must consider all the facts and circumstances of the
          case along with your medical knowledge when making any decision.
          MDCalc is not a replacement for experienced clinical judgment. In the
          words of Jerry Hoffman, “If you think the patient needs a test, do the
          test! Don&apos;t not do something a patient needs just because a score
          tells you something.” MDCalc cannot and will not be held legally,
          financially, or medically responsible for decisions physicians make
          using our calculators, equations, content, and algorithms.
        </p>

        <h2 className="text-2xl font-bold">Official Legal Disclaimer</h2>
        <article>
          The online clinical tools and content (“Services”) provided by MDCalc
          Ltd., Inc. (“MDCalc,” “we,” or “us”) are designed for use by
          healthcare professionals. Our Services are used by healthcare
          professionals merely as a guide to inform their clinical judgment. The
          Services and the output therefrom are not intended for, and should not
          be used by, laypersons.
          <br />
          MDCalc&lsquo;s content developers carefully structure the content to
          conform to the standards of professional practice that prevail at the
          time of development. However, standards and practices in medicine
          change as new data becomes available and users of the Services should
          consult a variety of sources.
          <br />
          The Services do not offer medical advice. By licensing, viewing, using
          and/or accessing the Services, you acknowledge and agree that the
          Services and the output from the Services are not certified as a
          medical device. You further acknowledge and agree that at all times
          you: (i) will not use the Services or the output therefrom to
          substitute any clinical judgment, diagnostic tool, diagnosis, or
          treatment by an appropriately trained and licensed health care
          professional, and; (ii) will use and access the Services in compliance
          with all applicable laws and regulations and in accordance with any
          user documentation, instruction manuals, guides and/or requirements we
          make available to you.
          <br />
          While information provided on this website / app is obtained from
          sources believed to be reliable, neither MDCalc nor our content
          providers make any representations or warranties regarding the
          Services provided or the output therefrom. Without limiting the
          foregoing, neither MDCalc nor our content providers represent or
          warrant that the Services or the output will be error-free, complete,
          accurate, and or current. Your use of the Services is with full
          knowledge that you waive any claim you may have against MDCalc for
          reliance on any content provided through the Services. Neither MDCalc
          nor our content providers assume any liability or responsibility for
          damage or injury (including death) to you or other persons arising
          from any use of any Services, information, idea, or other content
          received through the Services or this website / app.
          <br />
          The content on the MDCalc website / app, such as text, graphics, and
          images are for informational purposes only. MDCalc does not recommend
          or endorse any specific tests, physicians, products, procedures,
          opinions, or other information that may be mentioned on the website /
          app.
        </article>
      </section>
    </div>
  );
};

export default page;
