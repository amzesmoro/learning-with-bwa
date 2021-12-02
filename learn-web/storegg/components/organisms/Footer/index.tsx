import Image from 'next/image';
import FooterItem from '../../molecules/FooterItem';

export default function Footer() {
  return (
    <section className="footer pt-50">
      <footer>
        <div className="container-fluid">
          <div className="row">
            <div className="col-lg-4 text-lg-start text-center">
              <a href="" className="mb-30">
                <Image src="/icon/logo.svg" height={60} width={60} />
              </a>
              <p className="mt-30 text-lg color-palette-1 mb-30">StoreGG membantu gamers<br /> untuk menjadi
                pemenang sejati</p>
              <p className="mt-30 text-lg color-palette-1 mb-30">Copyright 2021. All Rights Reserved.</p>
            </div>
            <div className="col-lg-8 mt-lg-0 mt-20">
              <div className="row gap-sm-0">
                <FooterItem title="Company" child_one="About Us" href_one="/" child_two="Press Release" href_two="/" child_three="Terms of Use" href_three="/" child_four="Privacy & Policy" href_four="/" />
                <FooterItem title="Support" child_one="Refund Policy" href_one="/" child_two="Ublock Rewards" href_two="/" child_three="Live Chatting" href_three="/" child_four="" href_four="/" />
                <FooterItem title="Connect" child_one="hi@store.gg" href_one="mailto: hi@store.gg" child_two="team@store.gg" href_two="mailto: team@store.gg" child_three="Pasific 12, Jakarta Selatan" href_three="http://maps.google.com/?q=Pasific 12,Jakarta Selatan" child_four="021 - 1122 - 9090" href_four="tel: 02111229090" />
              </div>
            </div>
          </div>
        </div>
      </footer>
    </section>
  )
}
