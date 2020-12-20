import React from "react";
import Layout from "../../components/Layout/Layout";
import "./About.scss";

const About = () => {
  return (
    <Layout>
      <div className="container_wrapper">
        <div className="row">
          {/* image area start */}
          <div className="image_container">
            <img
              alt='stock1'
              className="stock_img"
              src="https://as1.ftcdn.net/jpg/02/91/45/00/500_F_291450064_ljOsSShepo1qq6wyDDuCaY41i9GIPDi1.jpg"
            />
          </div>
          {/* image area end */}


          {/* description area start */}
          <div className="description_area_wrap wrapper_container">
            <div className="description_area_1 desc_area_wrap">
              <h1 className="header_area header_section">Who We Are?</h1>
              <p className="description_aboutarea">
                <strong>ဇော်တူးဆိုင်း </strong> ဦးဆောင်ဖွဲ့စည်းထားသည့်
                နယူးယောက်မြို့ အခြေစိုက်
                <strong>Zaw Financial Solutions (ZFS – ‘ဇီ အက်ဖ် စက်’)</strong>
                လို့ အတို ခေါ်ပါသည်။) ကို မတ်လ (၂၀၂၀) မှာ တရားဝင် စတင်ခဲ့ပါတယ်။
                ဇော်တူးဆိုင်းသည် နယူးယောက်မြို့ရဲ့ အထင်ကရ ကိုလ်လန်ဘီယာ (Columbia
                University) တက္ကသိုလ်ကနေ ဘောဂဗေဒ မူဝါဒ ရေးရာဆိုင်ရာ မဟာဘွဲ့ကို
                (၂၀၁၅) မှာ ရရှိခဲ့ပြီ: သဌေးကြီးဂျော့ဆီုးရီုးစ် ရဲ့
                ဖောင်ဒေးရှင်းမှာ (၁၅) နှစ်ကြာ တာဝန်ထမ်းဆောင်ခဲ့ပါတယ်။
                <br />
                <br />
                <strong> ZFS </strong> အဖွဲ့သားများသည် အမေရိကန်နိုင်ငံတွင်
                <strong>စတော့ရှယ်ယာ</strong>များကို လက်လီအားဖြင့် ရေတိုရေရှည်
                ရင်းနှီးမြှုပ်နှံခြင်း နှင့် စျေးကွက် အတက်အကျအပေါ်မူတည်၍
                အရောင်းအဝယ်များ ပြုလုပ်ခြင်း စသည့် အတွေ့အကြုံများကို (၁၀)
                နှစ်ကျော်မျှ ရရှိနေကြသူများ ဖြစ်ပြီး၊ ရွှေ၊ ရေနံ၊
                အမေရိကန်အစိုးရ၏ အတိုးနှုံးစာချုပ်များ (Bonds) နှင့် အခြား
                ငွေကြေးနှင့်ဆက်နွယ်မှုရှိသည့် ကုန်စည်များကို အင်တာနက်မှတဆင့်
                ကြိုရောင်း ကြိုဝယ်စနစ် (Futures) ဖြင့် အပတ်စဉ် သို့မဟုတ် လစဉ်
                ဝင်ငွေအဖြစ် အရောင်းအဝယ် လုပ်နေကြသည်မှာလည်း (၃) နှစ်ကျော်
                အတွေအကြုံ ရရှိထားကြသူများ ဖြစ်ကြပါသည်။
                <br />
                <br />
                <strong> ZFS </strong> က စတော့ရှယ်ယာ နှင့် ငွေကြေးဆိုင်ရာ
                ကိစ္စရပ်များကို မြန်မာပြည်သားများအား ပညာပေးလိုသည့် ဆန္ဒဖြင့်
                ဖွဲ့စည်းထားခြင်းဖြစ်ပြီ: အခမဲ့ ဆွေးနွေးပွဲတွေ အင်တာနက်မှာ ကျင်းပ
                ပေးပါမည်။ စတော့ရှယ်ယာ စျေးကွက်တွေကို ရေရှည် (Professional)
                ပရော်ဖင်ရှင်နယ် အဖြစ်နှင့် စီးပွားရေး ဆန်ဆန် လုပ်ပြီး
                အသက်မွေးမှု လုပ်ငန်းလို ဝင်ငွေရှာချင်ပြီး ဂဃနဏ လေ့လာချင်ရင်တော့
                အခဲ့ကြေးငွေယူ သင်ကြားပေးမည် ဖြစ်ပါသည်။
              </p>
            </div>

            <div className="description_area_2 desc_area_wrap">
              <h1 className="header_area header_section">
                ဘယ်လို ဘာတွေ အရောင်းအဝယ်လုပ်တာလဲ?
              </h1>
              <p className="description_aboutarea">
                ဒေါ်လာ ၁၅,၀၀၀ ကနေ ၂၀,၀၀၀ လောက် အရင်းအနှီးလုပ်ပြီ: တစ်ပတ်ကို
                ဒေါ်လာ ၅၀၀ မှ ၁၅၀၀ လောက် အပိုဝင်ငွေရှာချင်ရင်{" "}
                <a class="link_msg" href="http://www.zawfinance.com">
                  www.zawfinance.com{" "}
                </a>
                မှာ အမည်စာရင်း ပေးလိုက်ပါ။ အချိန်နှင့် တပြေးညီ ကြိုရောင်း
                ကြိုဝယ်စနစ် (Futures) စျေးကွက်မှာ ဇော်တူးဆိုင်း အရောင်းအဝယ်
                လုပ်နေတာကို ကြည့်ပြီး အသင်မိတ်တွေတို့ပါ လေ့လာ သင်ယူ
                လုပ်ဆောင်နိုင်ပါသည်။ စတော့ရှယ်ယာ စျေးကွက်တွေ တက်တက် ကျကျ
                ငွေရှာလို့ရတဲ့ ဖြစ်နိုင်ခြေ အလားအလာများတဲ့ ဝယ်လို/ရောင်းလိုအား
                နည်းလမ်းတွေ သုံးသွားမည် ဖြစ်ပါသည်။
                <br />
                <br />
                ကြိုရောင်း ကြိုဝယ်စနစ်မှာက ဘယ်လိုကုမ္ပဏီမျိုးရဲ့ ရှယ်ရာတွေ
                ဝယ်ထားပြီ: ‘ကိုင်’ထား ‘လှောင်’ထား စရာ မလိုဘဲ မိမိ သတ်မှတ်ထားတဲ့
                စျေးကို ရောက်ရင် အချိန်မရွေး ဝယ်ရောင်း နိုင်ပါသည်။ အမေရိကရဲ့
                ကြိုရောင်း ကြိုဝယ် စျေးကွက်ဟာ တစ်ပတ်ကို ၅ရက် ဖွင့်ပြီ: တရက်ကို
                ၂၄ နာရီ နီးပါ: ဝယ်ရောင်းနိုင်ပါသည်။ တနင်းဂနွေ ည ၆ နာရီကနေ
                သောကြာနေ့ ညနေ ၄နာရီထိ အရောင်းအဝယ် လုပ်နိုင်ပါသည်။
              </p>
            </div>

            <div className="description_area_3 desc_area_wrap">
              <h1 className="header_area header_section">ဘာတွေလိုအပ်သလဲ?</h1>
              <p className="description_aboutarea">
                ဒါဆိုရင် ကျနော်တို့နဲ့ အတူတူ အင်တာနက်ကနေ အိမ်မှာနေပြီး
                ကြိုရောင်း ကြိုဝယ် စျေးကွက်မှာ အရောင်းအဝယ်လုပ်ရင်: အပိုငွေ
                ရှာချင်ရင် ဘာတွေလိုအပ်သလဲ?
                <br />
                <br />
                <ol>
                  <li>
                    {" "}
                    ကွန်ပြူတာတလုံ: (စာပွဲတင်ဆို ပိုကောင်းသည်)။ ကျွမ်းကျင်လာလျင်
                    ဖုန်းနဲ့ အဆင်ပြေနိုင်သည်။{" "}
                  </li>
                  <li>
                    {" "}
                    TradeStation 9.5 မှာ Futures and Stocks စာရင်:ဖွင့်
                    ဒေါင်းလော့လုပ်ရန် လိုအပ်သည်။{" "}
                  </li>
                  <li>
                    {" "}
                    ဒေါ်လာ ၁၅,၀၀၀ ကနေ ၂၀,၀၀၀ လောက်ထည့်ထားပြီ: အရင်းအနှီးအဖြစ်
                    လိုအပ်သည်။{" "}
                  </li>
                  <li>
                    {" "}
                    ကျနော်တို့ဆီမှာ လစဉ် ကြေးပေ:ပြီ: Zoom ကနေတဆင့် ပြသတဲ့
                    ဝယ်ရောင်းဇုန်တွေကို လိုက်ကူးပြီ: ငွေရှာနိုင်သည်။{" "}
                  </li>
                  <li>
                    {" "}
                    (Probalility) လို့ အသိများတဲ့ ‘ဖြစ်နိုင်ခြေ အလားအလာ’
                    သင်ချာစနစ်ကို သုံးတဲ့ အတွက် ကိုယ် ‘အကွက်’ ဆင်ထားတဲ့ ဇုန်တွေ
                    အလုပ်မဖြစ်ရင် (Cost of doing business) စီးပွားရှာတဲ့
                    အချိန်မှာ ငွေကုန်ကျတဲ့ စရိတ်အဖြစ် မှတ်ယူရန် ဖြစ်ပါသည်။{" "}
                  </li>
                </ol>
                Updated as of Sept 15
              </p>
            </div>

            <div className="description_area_4 desc_area_wrap">
              <h1 className="header_area header_section">Disclaimer</h1>
              <p className="description_aboutarea">
                ကြိုတင် အသိပေးချက် --- <br />
                ကျွန်တော်တို့သည် လိုင်စင်ရ ပွဲစားများ မဟုတ်ကြသလို၊ လက်မှတ်ရ
                ငွေကြေးဆိုင်ရာ အကြံဉာဏ်ပေးသူများလည်း မဟုတ်ကြပါ။ ထို့ကြောင့်
                ကျွန်တော်တို့ သင်ပြ ဆွေးနွေးကြသည့် ပညာပေ: အကြောင်းအရာများကို
                အမှီပြုပြီး အရောင်းအဝယ် သို့မဟုတ် ရင်းနှီးမြှုပ်နှံခြင်း
                ပြုလုပ်ကြပါက အမြတ်အစွန်း ရကြလိမ့်မည်ဟု မိတ်ဆွေများကို
                ကျွန်တော်တို့ အာမမခံပါ။ စတော့ရှယ်ယာများ မည်သည့် အချိန်တွင်၊
                မည်သည့်အကြောင်းကြောင့်၊ မည်ကဲ့သို့ တက်တတ်သည်၊ ကျတတ်သည်၊ စသည့်
                ကျွန်တော်တို့၏ အတွေ့အကြုံများ၊ သဘောထားအမြင်များကို ဝေငှလိုသည့်
                ရည်ရွယ်ချက် သက်သက်သာဖြစ်ကြောင်း ကြိုတင် အသိပေး အပ်ပါသည်။
              </p>
            </div>

            <div className="description_area_5 desc_area_wrap_5">
              <h1 className="header_area header_section">FAQ</h1>
              <h3 className="coming_soon"> Coming Soon ....</h3>
              <div className="faq-list_item desc_area_wrap">
                <ul class="faq_list">
                  <li class="faq_list_items">
                    <strong>
                      <a class="icon_bar" href="#">
                        <i class="angle double right icon"></i>{" "}
                      </a>
                      Include questions a potential student may have before
                      purchase.
                    </strong>
                    <div className="list_p_msg">
                      <p className="faq_list_p">
                        {" "}
                        Address common questions ahead of time to save yourself
                        an email.
                      </p>
                    </div>
                  </li>

                  <li class="faq_list_items">
                    <strong>
                      <a class="icon_bar" href="#">
                        <i class="angle double right icon"></i>{" "}
                      </a>
                      Include questions a potential student may have before
                      purchase.
                    </strong>
                    <div className="list_p_msg">
                      <p className="faq_list_p">
                        {" "}
                        Address common questions ahead of time to save yourself
                        an email.
                      </p>
                    </div>
                  </li>

                  <li class="faq_list_items">
                    <strong>
                      <a class="icon_bar" href="#">
                        <i class="angle double right icon"></i>{" "}
                      </a>
                      Include questions a potential student may have before
                      purchase.
                    </strong>
                    <div className="list_p_msg">
                      <p className="faq_list_p">
                        {" "}
                        Address common questions ahead of time to save yourself
                        an email.
                      </p>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* description area end */}
    </Layout>
  );
};

export default About;
