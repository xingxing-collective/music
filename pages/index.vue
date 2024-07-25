<template>
  <div class="px-4 py-4">
    <div ref="container">
      <Carousel3d style="margin: 0;" class=" hidden lg:block md:block" :perspective="0" :autoplay="true"
        :inverseScaling="inverseScaling" :width="width" :height="height" :border="0" :loop="true" :space="space"
        :display="3">
        <Slide v-for="(banner, i) in banners.filter(x => !Boolean(x.adSource))" :key="banner.targetId" :index="i">
          <img class="object-fill w-full h-full" :src="banner.imageUrl" alt="" />
        </Slide>
      </Carousel3d>
    </div>
  </div>
</template>
<script setup lang="ts">
import { Carousel3d, Slide } from 'vue3-carousel-3d'
import "vue3-carousel-3d/dist/index.css"

const { banners } = {
  banners: [
    {
      "imageUrl": "http://p1.music.126.net/tllewh-IUZqyBfCvjTc7cw==/109951169813394454.jpg",
      "targetId": 22605419,
      "adid": null,
      "targetType": 1004,
      "titleColor": "red",
      "typeTitle": "独家策划",
      "url": null,
      "exclusive": false,
      "monitorImpress": null,
      "monitorClick": null,
      "monitorType": null,
      "monitorImpressList": null,
      "monitorClickList": null,
      "monitorBlackList": null,
      "extMonitor": null,
      "extMonitorInfo": null,
      "adSource": null,
      "adLocation": null,
      "adDispatchJson": null,
      "encodeId": "22605419",
      "program": null,
      "event": null,
      "video": null,
      "song": null,
      "scm": "1.music-homepage.homepage_banner_force.banner.14890960.786435941.null",
      "bannerBizType": "force_banner"
    },
    {
      "imageUrl": "http://iadmusicmat.music.126.net/ad0317c91bd9437ab7148727766a09bc.jpg",
      "targetId": 143395861380020370,
      "adid": "143395861380020366",
      "targetType": 3000,
      "titleColor": "blue",
      "typeTitle": "广告",
      "url": "475966832",
      "exclusive": false,
      "monitorImpress": "",
      "monitorClick": "",
      "monitorType": null,
      "monitorImpressList": [],
      "monitorClickList": [],
      "monitorBlackList": null,
      "extMonitor": [
        {
          "monitorImpress": "http://iad.service.163.org/adx/me.gif?adx_req=y1vYaVrmJSv5RU28bZPfmDIlDvR_nIOIC437kR4PCzPKpWogdu1oJRY2skrxqWTQaMyZV0cd_lMhtsa-Ir9OZMuLg35QWS27jHP0mEzTuU4NJUQLYwfVsfKXcT2EvBoGPi7hDHswdy_fzy3opm_RLAqW_dLBtuUgdtYGfz5KtZ7l8g66l4f3Z93B9-FECA7wm98BFQKJwm_hMjzfKuA-uZBqlokg1YDezlHVPtx4gDa7QPGVF1fVq0yW5_7wHwjBmzifGJCi4d4cBep_QjU3HmEgFmsh0RAkGcgNJ8jGEBzCMzt5G-2uASs7ky6mUYz2JtkmNqXfry_DI8QVS-ygod4LQ4r3wIDphON1GrtyzMAD87EIBNrY0QkpzYjmqpp-HR3d1C5hffMmF8oPYkDUqZSUWg1kwdgxi-_3Hu-Vs9ANEzvC4GCIgG9yE4Ev3_eA6RD3PGTXqraklfpF0ncpsI_KWIbd0haOD7Z9aJFJ_E9E5FQfznEBC24-6PiKce_53U2RBPOwNlSCnTs4TO7IOqFzScYDQ7DhMyuB_WqCTfypYwOGz-7nnEcphQ_FtpeIl9yKXakSIvEykZD0qX9CpgSxT7BLDx7SxOwFzwiiy7T4DGavP3MKUejAHx_9XD_VqU7GyorQlvtB9skxmgl5APbVRos-561Xw-nyNOGbz4NNyzPaP6_kPuhSIy_QKwfb1xeQB19XqqT0eL5m99zP7Q&dsp=10001&zz=846596&yy=90000003&pp=&t=__TIME__&ni=__IESID__&mo=__OS__&ns=116.25.63.218&m0=__OPENUDID__&m0a=__DUID__&m1=__ANDROIDID1__&m1a=__ANDROIDID__&m2=__IMEI__&m4=__AAID__&m5=__IDFA__&m6=__MAC1__&m6a=__MAC__&nn=__APP__&ur=__URS__&mu=__MURS__&mo1=__OS1__&nws=__NWS__&op=__OP__&la=__LA__&lo=__LO__&laot=__LAOT__&meid=__MEID__&mcid=__MCID__&act=__ACT__&ua=__UA__&ugcId=__UGCID__&ugcType=__UGCTYPE__&m2md5=__IMEIMD5__&m5md5=__IDFAMD5__&deviceId=__DEVICE_ID__&oaid=__OAID__&target=__TARGET__&av=__APPVER__&anchor=__ANCHOR__&work=__WORK__&ivc_s=0&iyunId=__IYUNID__&muser=__MUSER__&pod=__PODCAST__&podType=__PODTYPE__&ap=__AD_POS__&apc=__AD_POC__&sc=__SOURCE__&so=__MSAS__&owp=__OWP__&ct=__CT__&as=__AS__&ic=__IC__&ds=__DEVICE_STRATEGY__&brt=&nsp=__NS__&ov=__OS_VER__&pi=__PRE_INS__&mt=__MACHINE_TYPE__&ivc_f=__IVC_F__&ivc_a=__IVC_A__&tfs=__TFS__&aefe=__AEFE__&aect=__AECT__&dp_app=__DP_APP__&is_ins=__IS_INS__&url=__URL__&con_info=__CONTEXT_INFO__&sos=__SOS__&sov=__SOS_VER__",
          "monitorClick": "http://iad.service.163.org/adx/mc.gif?adx_req=y1vYaVrmJSv5RU28bZPfmDIlDvR_nIOIC437kR4PCzPKpWogdu1oJRY2skrxqWTQaMyZV0cd_lMhtsa-Ir9OZMuLg35QWS27jHP0mEzTuU4NJUQLYwfVsfKXcT2EvBoGPi7hDHswdy_fzy3opm_RLAqW_dLBtuUgdtYGfz5KtZ7l8g66l4f3Z93B9-FECA7wm98BFQKJwm_hMjzfKuA-uZBqlokg1YDezlHVPtx4gDa7QPGVF1fVq0yW5_7wHwjBmzifGJCi4d4cBep_QjU3HmEgFmsh0RAkGcgNJ8jGEBzCMzt5G-2uASs7ky6mUYz2JtkmNqXfry_DI8QVS-ygod4LQ4r3wIDphON1GrtyzMAD87EIBNrY0QkpzYjmqpp-HR3d1C5hffMmF8oPYkDUqZSUWg1kwdgxi-_3Hu-Vs9ANEzvC4GCIgG9yE4Ev3_eA6RD3PGTXqraklfpF0ncpsI_KWIbd0haOD7Z9aJFJ_E9E5FQfznEBC24-6PiKce_53U2RBPOwNlSCnTs4TO7IOqFzScYDQ7DhMyuB_WqCTfypYwOGz-7nnEcphQ_FtpeIl9yKXakSIvEykZD0qX9CpgSxT7BLDx7SxOwFzwiiy7T4DGavP3MKUejAHx_9XD_VqU7GyorQlvtB9skxmgl5APbVRos-561Xw-nyNOGbz4NNyzPaP6_kPuhSIy_QKwfb1xeQB19XqqT0eL5m99zP7Q&dsp=10001&zz=846596&yy=90000003&pp=&t=__TIME__&ni=__IESID__&mo=__OS__&ns=116.25.63.218&m0=__OPENUDID__&m0a=__DUID__&m1=__ANDROIDID1__&m1a=__ANDROIDID__&m2=__IMEI__&m4=__AAID__&m5=__IDFA__&m6=__MAC1__&m6a=__MAC__&nn=__APP__&ur=__URS__&mu=__MURS__&mo1=__OS1__&nws=__NWS__&op=__OP__&la=__LA__&lo=__LO__&laot=__LAOT__&meid=__MEID__&mcid=__MCID__&act=__ACT__&ua=__UA__&ugcId=__UGCID__&ugcType=__UGCTYPE__&m2md5=__IMEIMD5__&m5md5=__IDFAMD5__&deviceId=__DEVICE_ID__&oaid=__OAID__&target=__TARGET__&av=__APPVER__&anchor=__ANCHOR__&work=__WORK__&ivc_s=0&iyunId=__IYUNID__&muser=__MUSER__&pod=__PODCAST__&podType=__PODTYPE__&ap=__AD_POS__&apc=__AD_POC__&sc=__SOURCE__&so=__MSAS__&owp=__OWP__&ct=__CT__&as=__AS__&ic=__IC__&ds=__DEVICE_STRATEGY__&brt=&nsp=__NS__&ov=__OS_VER__&pi=__PRE_INS__&mt=__MACHINE_TYPE__&ivc_f=__IVC_F__&ivc_a=__IVC_A__&tfs=__TFS__&aefe=__AEFE__&aect=__AECT__&dp_app=__DP_APP__&is_ins=__IS_INS__&url=__URL__&con_info=__CONTEXT_INFO__&sos=__SOS__&sov=__SOS_VER__",
          "monitorType": "adx.inter",
          "monitorConversion": null
        },
        {
          "monitorImpress": null,
          "monitorClick": "http://appnew.ly.com/addap/click/music163?aaid=65&refid=1675111667&imei=__IMEI__&idfa=__IDFA__&androidid=__ANDROIDID__&ua=__UA__&ip=116.25.63.218&os_ver=__OSVER__&click_time=__CLICKTIME__&click_id=ASEwW5UB-QH5AQ.a822e1db24c8c4fe492f22567ff10d048Bg4bHB0eHzE7PEkbIHHXOy3r8dYyWgYvn8uU58tJg-JHZfbkXqOOASeb0MggLiCKMLxRKnEqkIqhKrAqsIrQHtAu8CjwyxCtIIkwnVCtYBmQG5ElqeCAwAPBCIICxRLOEI8M0giTCZMC1QrWAZgGmQFa3QWeCOIIowunEqkIqhLqAqsCqwisD60B7QLvArEKsgzyArcRuRL5AbsPvRH-Eb8Q&adid=713156&oaid=__OAID__&oaidMd5=__OAIDMD5__&os=__OS__&caid=__YAID__",
          "monitorType": "appnew.ly.comexter",
          "monitorConversion": null
        },
        {
          "monitorImpress": "http://iad.service.163.org/me.gif?ytgReq=A01dzDwiujL45bL--E43ad_n_wawRfs1FWaRAaN-bN9b5UCxzitKgcXaAIl5cGbmbm1nhFUDs_quGZLVgg2w6BelIe3mYFDhEWhtNEd0aYdcWIIXcjn_cb6OO8JuCyCwnKEjXYt0iQqFesI2rb8rSnnweusKs6NQd27RhD-ES25FxVAJ8oGbu07xUXzrNSGht9bi6pF1iDJ_o5xQyDIsrJZ--9DvOzFiMlTwjlZwSdNu0fCec8JrksT79hl88LF785Kr4qp2PV_wvfyaWX87KXQWMUHeBrJqmpXnOKKHbxRTyUZQy7unJi43Mv9GL-8PbBHc6tlhkev9WFH82IHXhXWbB7yFemmQ8R8UOXpak7Nj5Wix8Xz7SfnHdhdPcrJkCoXwTKWOqiJw-wKClwPfmuaCipbkOuxtLq2Kzw33MkZz9L62tLiB-Nwx1l45--zuWKhr2tfvK5iFJDyYtxu6e-i31YpBsa0ooNYS9B57QAJR4kY_irh68WJseLxxRwJ4xM7wdSVlQl0xyRNydYvuU5kCbDT2L33A8g9BXi9YJe5N1eaODcdaLCHoj-99D467Zpc&t=__TIME__&ni=__IESID__&mo=__OS__&ns=116.25.63.218&m0=__OPENUDID__&m0a=__DUID__&m1=__ANDROIDID1__&m1a=__ANDROIDID__&m2=__IMEI__&m4=__AAID__&m5=__IDFA__&m6=__MAC1__&m6a=__MAC__&nn=__APP__&ur=__URS__&mu=__MURS__&mo1=__OS1__&nws=__NWS__&op=__OP__&o=__LP__&la=__LA__&lo=__LO__&laot=__LAOT__&meid=__MEID__&mcid=__MCID__&ua=__UA__&wp=G3f39Ou_HmzzqMR6M-06cgohIcUrQPQikCWWl6Gdhe9fRnhjkGQfI64ds5Bx2SAcJ_a_HOsYBNlMt5EvXVd-LYNs-G0WqVBjW01CnuPqaZduf1JpnNJgUySPuGtymyjQo3wKc2kGUfVUpV1Q2bU0Pldu1o4ICnnr3SGrXNgHs65uuzh5lAIeYpcGr0eFKg1Wqd8RGfGn_CM1YCrXYxYl-0Fw-HlZFEN1eT79X7qhVgxYpI12fL-lMjoOar5gkDp0OOOAfZ8urDlaZyfFUn0xv-2U_TricVC9AWPKIEqyQq-xncjJRued2-1TQgTjeUs7mFKhBt5s-SqSfpELpwaeFtvSaVq3CmQKSxkrklhQT0g=&ugcId=__UGCID__&ugcType=__UGCTYPE__&m2md5=__IMEIMD5__&m5md5=__IDFAMD5__&deviceId=__DEVICE_ID__&oaid=__OAID__&target=__TARGET__&anchor=__ANCHOR__&work=__WORK__&ivc_s=0&iyunId=__IYUNID__&muser=__MUSER__&pod=__PODCAST__&podType=__PODTYPE__&ap=__AD_POS__&apc=__AD_POC__&sc=__SOURCE__&so=__MSAS__&owp=__OWP__&ct=__CT__&as=__AS__&pi=__PRE_INS__&mt=__MACHINE_TYPE__&ivc_f=__IVC_F__&ivc_a=__IVC_A__&con_info=__CONTEXT_INFO__&ov=__OS_VER__&ext=__EXT__&zz=846596&yy=90000003",
          "monitorClick": "http://iad.service.163.org/mc.gif?ytgReq=A01dzDwiujL45bL--E43ad_n_wawRfs1FWaRAaN-bN9b5UCxzitKgcXaAIl5cGbmbm1nhFUDs_quGZLVgg2w6BelIe3mYFDhEWhtNEd0aYdcWIIXcjn_cb6OO8JuCyCwnKEjXYt0iQqFesI2rb8rSnnweusKs6NQd27RhD-ES25FxVAJ8oGbu07xUXzrNSGht9bi6pF1iDJ_o5xQyDIsrJZ--9DvOzFiMlTwjlZwSdNu0fCec8JrksT79hl88LF785Kr4qp2PV_wvfyaWX87KXQWMUHeBrJqmpXnOKKHbxRTyUZQy7unJi43Mv9GL-8PbBHc6tlhkev9WFH82IHXhXWbB7yFemmQ8R8UOXpak7Nj5Wix8Xz7SfnHdhdPcrJkCoXwTKWOqiJw-wKClwPfmuaCipbkOuxtLq2Kzw33MkZz9L62tLiB-Nwx1l45--zuWKhr2tfvK5iFJDyYtxu6e-i31YpBsa0ooNYS9B57QAJR4kY_irh68WJseLxxRwJ4xM7wdSVlQl0xyRNydYvuU5kCbDT2L33A8g9BXi9YJe5N1eaODcdaLCHoj-99D467Zpc&t=__TIME__&ni=__IESID__&mo=__OS__&ns=116.25.63.218&m0=__OPENUDID__&m0a=__DUID__&m1=__ANDROIDID1__&m1a=__ANDROIDID__&m2=__IMEI__&m4=__AAID__&m5=__IDFA__&m6=__MAC1__&m6a=__MAC__&nn=__APP__&ur=__URS__&mu=__MURS__&mo1=__OS1__&nws=__NWS__&op=__OP__&o=__LP__&la=__LA__&lo=__LO__&laot=__LAOT__&meid=__MEID__&mcid=__MCID__&ua=__UA__&wp=G3f39Ou_HmzzqMR6M-06cgohIcUrQPQikCWWl6Gdhe9fRnhjkGQfI64ds5Bx2SAcJ_a_HOsYBNlMt5EvXVd-LYNs-G0WqVBjW01CnuPqaZduf1JpnNJgUySPuGtymyjQo3wKc2kGUfVUpV1Q2bU0Pldu1o4ICnnr3SGrXNgHs65uuzh5lAIeYpcGr0eFKg1Wqd8RGfGn_CM1YCrXYxYl-0Fw-HlZFEN1eT79X7qhVgxYpI12fL-lMjoOar5gkDp0OOOAfZ8urDlaZyfFUn0xv-2U_TricVC9AWPKIEqyQq-xncjJRued2-1TQgTjeUs7mFKhBt5s-SqSfpELpwaeFtvSaVq3CmQKSxkrklhQT0g=&ugcId=__UGCID__&ugcType=__UGCTYPE__&m2md5=__IMEIMD5__&m5md5=__IDFAMD5__&deviceId=__DEVICE_ID__&oaid=__OAID__&target=__TARGET__&anchor=__ANCHOR__&work=__WORK__&ivc_s=0&iyunId=__IYUNID__&muser=__MUSER__&pod=__PODCAST__&podType=__PODTYPE__&ap=__AD_POS__&apc=__AD_POC__&sc=__SOURCE__&so=__MSAS__&owp=__OWP__&ct=__CT__&as=__AS__&pi=__PRE_INS__&mt=__MACHINE_TYPE__&ivc_f=__IVC_F__&ivc_a=__IVC_A__&con_info=__CONTEXT_INFO__&ov=__OS_VER__&ext=__EXT__&zz=846596&yy=90000003",
          "monitorType": "ytg.inter",
          "monitorConversion": null
        }
      ],
      "extMonitorInfo": {
        "aliAdId": "",
        "reqId": "adx_req=y1vYaVrmJSv5RU28bZPfmDIlDvR_nIOIC437kR4PCzPKpWogdu1oJRY2skrxqWTQaMyZV0cd_lMhtsa-Ir9OZMuLg35QWS27jHP0mEzTuU4NJUQLYwfVsfKXcT2EvBoGPi7hDHswdy_fzy3opm_RLAqW_dLBtuUgdtYGfz5KtZ7l8g66l4f3Z93B9-FECA7wm98BFQKJwm_hMjzfKuA-uZBqlokg1YDezlHVPtx4gDa7QPGVF1fVq0yW5_7wHwjBmzifGJCi4d4cBep_QjU3HmEgFmsh0RAkGcgNJ8jGEBzCMzt5G-2uASs7ky6mUYz2JtkmNqXfry_DI8QVS-ygod4LQ4r3wIDphON1GrtyzMAD87EIBNrY0QkpzYjmqpp-HR3d1C5hffMmF8oPYkDUqZSUWg1kwdgxi-_3Hu-Vs9ANEzvC4GCIgG9yE4Ev3_eA6RD3PGTXqraklfpF0ncpsI_KWIbd0haOD7Z9aJFJ_E9E5FQfznEBC24-6PiKce_53U2RBPOwNlSCnTs4TO7IOqFzScYDQ7DhMyuB_WqCTfypYwOGz-7nnEcphQ_FtpeIl9yKXakSIvEykZD0qX9CpgSxT7BLDx7SxOwFzwiiy7T4DGavP3MKUejAHx_9XD_VqU7GyorQlvtB9skxmgl5APbVRos-561Xw-nyNOGbz4NNyzPaP6_kPuhSIy_QKwfb1xeQB19XqqT0eL5m99zP7Q",
        "requestid": "",
        "orderId": "",
        "ad_type": "",
        "dspId": "10001",
        "price": "",
        "refer": "",
        "needClickPosInfo": false,
        "mode": "",
        "scm": "",
        "spm": "",
        "displayMd5Sign": "",
        "monitorType": "1"
      },
      "adSource": "1",
      "adLocation": "10002",
      "adDispatchJson": "{\"sourceType\":0,\"pkgName\":\"\",\"productType\":201,\"androidAppInfo\":{\"pkgName\":\"\",\"md5\":\"\",\"size\":0,\"productName\":\"\",\"version\":\"\",\"developer\":null,\"permissionDescUrl\":null,\"privacyPolicyUrl\":null,\"appUpdateTime\":null},\"monitorConversionList\":[],\"adMaterial\":{\"nativeResource\":null,\"picList\":[],\"videoList\":[{\"threadId\":null,\"coverUrl\":\"http://iadmusicmat.music.126.net/ad0317c91bd9437ab7148727766a09bc.jpg\",\"height\":720,\"width\":1280,\"title\":null,\"vid\":null,\"urlInfo\":{\"id\":null,\"url\":\"http://iadmusicmatvideo.music.126.net/cd831883adb74462ae1b7e1a0affb910.mp4\",\"size\":null,\"validityTime\":null,\"r\":null},\"durationms\":null,\"subscribed\":null,\"playTime\":null,\"externalVideo\":true,\"userType\":0,\"videoTriggerTime\":null,\"layerTriggerTime\":null,\"videoFileSize\":1443325}],\"audioList\":[],\"minorVideoList\":[],\"videoAutoPlayWithoutWifi\":false,\"easyPlayable\":null},\"linkingUseNewMaterial\":{\"nativeResource\":null,\"picList\":[],\"videoList\":[],\"audioList\":[],\"minorVideoList\":[],\"videoAutoPlayWithoutWifi\":false,\"easyPlayable\":null},\"adSponsor\":{\"userId\":0,\"nickname\":\"同程旅行\",\"avatar\":\"http://iadmat.nosdn.127.net/9a89ee4963934335bf8906575f1d8fc3.jpg\",\"userType\":0,\"authStatus\":0},\"creativeType\":2,\"pattern\":\"40006\",\"adContentText\":\"\",\"showTime\":5.0,\"contextInfo\":{\"material_id\":\"846596\",\"req_id\":\"822e1db24c8c4fe492f22567ff10d048\",\"dsp_id\":\"10001\",\"tag_id\":\"90000003\",\"deal_id\":null,\"creative_id\":\"743201\",\"related_deal_id\":null,\"related_material_id\":null,\"invocation_style\":null,\"native_id\":\"2028601\",\"startup_type\":null,\"api_type\":3,\"adx_alg\":\"{\\\"user_factor_total\\\":1.0,\\\"win_by_factor\\\":0}\",\"sponsor_id\":null,\"request_source\":null,\"monitor_touch_type\":1,\"vip_payment_type\":1},\"invocationStyleInfo\":{\"invocationStyle\":0,\"invocationIcon\":null,\"invocationStyleContent\":null,\"slideDistance\":null,\"activeBeginTime\":0,\"activeEndTime\":999,\"iconShowBeginTime\":null,\"iconShowEndTime\":null},\"c2sVideoActionMonitor\":{\"videoPlay\":null,\"videoAutoPlay\":null,\"videoValidPlay\":null,\"videoBreak\":null,\"videoOver\":null},\"s2sVideoActionMonitor\":{\"videoPlay\":[{\"url\":\"http://iad.service.163.org/video.gif?ytgReq=A01dzDwiujL45bL--E43ad_n_wawRfs1FWaRAaN-bN9b5UCxzitKgcXaAIl5cGbmbm1nhFUDs_quGZLVgg2w6BelIe3mYFDhEWhtNEd0aYdcWIIXcjn_cb6OO8JuCyCwnKEjXYt0iQqFesI2rb8rSnnweusKs6NQd27RhD-ES25FxVAJ8oGbu07xUXzrNSGht9bi6pF1iDJ_o5xQyDIsrJZ--9DvOzFiMlTwjlZwSdNu0fCec8JrksT79hl88LF785Kr4qp2PV_wvfyaWX87KXQWMUHeBrJqmpXnOKKHbxRTyUZQy7unJi43Mv9GL-8PbBHc6tlhkev9WFH82IHXhXWbB7yFemmQ8R8UOXpak7Nj5Wix8Xz7SfnHdhdPcrJkCoXwTKWOqiJw-wKClwPfmuaCipbkOuxtLq2Kzw33MkZz9L62tLiB-Nwx1l45--zuWKhr2tfvK5iFJDyYtxu6e-i31YpBsa0ooNYS9B57QAJR4kY_irh68WJseLxxRwJ4xM7wdSVlQl0xyRNydYvuU5kCbDT2L33A8g9BXi9YJe5N1eaODcdaLCHoj-99D467Zpc&t=__TIME__&ni=__IESID__&mo=__OS__&ns=116.25.63.218&m0=__OPENUDID__&m0a=__DUID__&m1=__ANDROIDID1__&m1a=__ANDROIDID__&m2=__IMEI__&m4=__AAID__&m5=__IDFA__&m6=__MAC1__&m6a=__MAC__&nn=__APP__&ur=__URS__&mu=__MURS__&mo1=__OS1__&nws=__NWS__&op=__OP__&o=__LP__&la=__LA__&lo=__LO__&laot=__LAOT__&meid=__MEID__&mcid=__MCID__&ua=__UA__&wp=G3f39Ou_HmzzqMR6M-06cgohIcUrQPQikCWWl6Gdhe9fRnhjkGQfI64ds5Bx2SAcJ_a_HOsYBNlMt5EvXVd-LYNs-G0WqVBjW01CnuPqaZduf1JpnNJgUySPuGtymyjQo3wKc2kGUfVUpV1Q2bU0Pldu1o4ICnnr3SGrXNgHs65uuzh5lAIeYpcGr0eFKg1Wqd8RGfGn_CM1YCrXYxYl-0Fw-HlZFEN1eT79X7qhVgxYpI12fL-lMjoOar5gkDp0OOOAfZ8urDlaZyfFUn0xv-2U_TricVC9AWPKIEqyQq-xncjJRued2-1TQgTjeUs7mFKhBt5s-SqSfpELpwaeFtvSaVq3CmQKSxkrklhQT0g=&ugcId=__UGCID__&ugcType=__UGCTYPE__&m2md5=__IMEIMD5__&m5md5=__IDFAMD5__&deviceId=__DEVICE_ID__&oaid=__OAID__&target=__TARGET__&anchor=__ANCHOR__&work=__WORK__&stageType=__STAGE_TYPE__&playDuration=__PLAY_DURATION__&iyunId=__IYUNID__&muser=__MUSER__&pod=__PODCAST__&podType=__PODTYPE__&ap=__AD_POS__&apc=__AD_POC__&sc=__SOURCE__&so=__MSAS__&owp=__OWP__&ov=__OS_VER__&zz=846596&yy=90000003\",\"monitorType\":\"ytg.inter\",\"videoValidPlayDuration\":null}],\"videoAutoPlay\":[{\"url\":\"http://iad.service.163.org/video.gif?ytgReq=A01dzDwiujL45bL--E43ad_n_wawRfs1FWaRAaN-bN9b5UCxzitKgcXaAIl5cGbmbm1nhFUDs_quGZLVgg2w6BelIe3mYFDhEWhtNEd0aYdcWIIXcjn_cb6OO8JuCyCwnKEjXYt0iQqFesI2rb8rSnnweusKs6NQd27RhD-ES25FxVAJ8oGbu07xUXzrNSGht9bi6pF1iDJ_o5xQyDIsrJZ--9DvOzFiMlTwjlZwSdNu0fCec8JrksT79hl88LF785Kr4qp2PV_wvfyaWX87KXQWMUHeBrJqmpXnOKKHbxRTyUZQy7unJi43Mv9GL-8PbBHc6tlhkev9WFH82IHXhXWbB7yFemmQ8R8UOXpak7Nj5Wix8Xz7SfnHdhdPcrJkCoXwTKWOqiJw-wKClwPfmuaCipbkOuxtLq2Kzw33MkZz9L62tLiB-Nwx1l45--zuWKhr2tfvK5iFJDyYtxu6e-i31YpBsa0ooNYS9B57QAJR4kY_irh68WJseLxxRwJ4xM7wdSVlQl0xyRNydYvuU5kCbDT2L33A8g9BXi9YJe5N1eaODcdaLCHoj-99D467Zpc&t=__TIME__&ni=__IESID__&mo=__OS__&ns=116.25.63.218&m0=__OPENUDID__&m0a=__DUID__&m1=__ANDROIDID1__&m1a=__ANDROIDID__&m2=__IMEI__&m4=__AAID__&m5=__IDFA__&m6=__MAC1__&m6a=__MAC__&nn=__APP__&ur=__URS__&mu=__MURS__&mo1=__OS1__&nws=__NWS__&op=__OP__&o=__LP__&la=__LA__&lo=__LO__&laot=__LAOT__&meid=__MEID__&mcid=__MCID__&ua=__UA__&wp=G3f39Ou_HmzzqMR6M-06cgohIcUrQPQikCWWl6Gdhe9fRnhjkGQfI64ds5Bx2SAcJ_a_HOsYBNlMt5EvXVd-LYNs-G0WqVBjW01CnuPqaZduf1JpnNJgUySPuGtymyjQo3wKc2kGUfVUpV1Q2bU0Pldu1o4ICnnr3SGrXNgHs65uuzh5lAIeYpcGr0eFKg1Wqd8RGfGn_CM1YCrXYxYl-0Fw-HlZFEN1eT79X7qhVgxYpI12fL-lMjoOar5gkDp0OOOAfZ8urDlaZyfFUn0xv-2U_TricVC9AWPKIEqyQq-xncjJRued2-1TQgTjeUs7mFKhBt5s-SqSfpELpwaeFtvSaVq3CmQKSxkrklhQT0g=&ugcId=__UGCID__&ugcType=__UGCTYPE__&m2md5=__IMEIMD5__&m5md5=__IDFAMD5__&deviceId=__DEVICE_ID__&oaid=__OAID__&target=__TARGET__&anchor=__ANCHOR__&work=__WORK__&stageType=__STAGE_TYPE__&playDuration=__PLAY_DURATION__&iyunId=__IYUNID__&muser=__MUSER__&pod=__PODCAST__&podType=__PODTYPE__&ap=__AD_POS__&apc=__AD_POC__&sc=__SOURCE__&so=__MSAS__&owp=__OWP__&ov=__OS_VER__&zz=846596&yy=90000003\",\"monitorType\":\"ytg.inter\",\"videoValidPlayDuration\":null}],\"videoValidPlay\":[{\"url\":\"http://appnew.ly.com/addap/click/music163?aaid=65&refid=1675111667&imei=__IMEI__&idfa=__IDFA__&androidid=__ANDROIDID__&ua=__UA__&ip=116.25.63.218&os_ver=__OSVER__&click_time=__CLICKTIME__&click_id=ASEwW5UB-QH5AQ.a822e1db24c8c4fe492f22567ff10d048Bg4bHB0eHzE7PEkbIHHXOy3r8dYyWgYvn8uU58tJg-JHZfbkXqOOASeb0MggLiCKMLxRKnEqkIqhKrAqsIrQHtAu8CjwyxCtIIkwnVCtYBmQG5ElqeCAwAPBCIICxRLOEI8M0giTCZMC1QrWAZgGmQFa3QWeCOIIowunEqkIqhLqAqsCqwisD60B7QLvArEKsgzyArcRuRL5AbsPvRH-Eb8Q&adid=713156&oaid=__OAID__&oaidMd5=__OAIDMD5__&os=__OS__&caid=__YAID__\",\"monitorType\":\"appnew.ly.comexter\",\"videoValidPlayDuration\":2},{\"url\":\"http://iad.service.163.org/video.gif?ytgReq=A01dzDwiujL45bL--E43ad_n_wawRfs1FWaRAaN-bN9b5UCxzitKgcXaAIl5cGbmbm1nhFUDs_quGZLVgg2w6BelIe3mYFDhEWhtNEd0aYdcWIIXcjn_cb6OO8JuCyCwnKEjXYt0iQqFesI2rb8rSnnweusKs6NQd27RhD-ES25FxVAJ8oGbu07xUXzrNSGht9bi6pF1iDJ_o5xQyDIsrJZ--9DvOzFiMlTwjlZwSdNu0fCec8JrksT79hl88LF785Kr4qp2PV_wvfyaWX87KXQWMUHeBrJqmpXnOKKHbxRTyUZQy7unJi43Mv9GL-8PbBHc6tlhkev9WFH82IHXhXWbB7yFemmQ8R8UOXpak7Nj5Wix8Xz7SfnHdhdPcrJkCoXwTKWOqiJw-wKClwPfmuaCipbkOuxtLq2Kzw33MkZz9L62tLiB-Nwx1l45--zuWKhr2tfvK5iFJDyYtxu6e-i31YpBsa0ooNYS9B57QAJR4kY_irh68WJseLxxRwJ4xM7wdSVlQl0xyRNydYvuU5kCbDT2L33A8g9BXi9YJe5N1eaODcdaLCHoj-99D467Zpc&t=__TIME__&ni=__IESID__&mo=__OS__&ns=116.25.63.218&m0=__OPENUDID__&m0a=__DUID__&m1=__ANDROIDID1__&m1a=__ANDROIDID__&m2=__IMEI__&m4=__AAID__&m5=__IDFA__&m6=__MAC1__&m6a=__MAC__&nn=__APP__&ur=__URS__&mu=__MURS__&mo1=__OS1__&nws=__NWS__&op=__OP__&o=__LP__&la=__LA__&lo=__LO__&laot=__LAOT__&meid=__MEID__&mcid=__MCID__&ua=__UA__&wp=G3f39Ou_HmzzqMR6M-06cgohIcUrQPQikCWWl6Gdhe9fRnhjkGQfI64ds5Bx2SAcJ_a_HOsYBNlMt5EvXVd-LYNs-G0WqVBjW01CnuPqaZduf1JpnNJgUySPuGtymyjQo3wKc2kGUfVUpV1Q2bU0Pldu1o4ICnnr3SGrXNgHs65uuzh5lAIeYpcGr0eFKg1Wqd8RGfGn_CM1YCrXYxYl-0Fw-HlZFEN1eT79X7qhVgxYpI12fL-lMjoOar5gkDp0OOOAfZ8urDlaZyfFUn0xv-2U_TricVC9AWPKIEqyQq-xncjJRued2-1TQgTjeUs7mFKhBt5s-SqSfpELpwaeFtvSaVq3CmQKSxkrklhQT0g=&ugcId=__UGCID__&ugcType=__UGCTYPE__&m2md5=__IMEIMD5__&m5md5=__IDFAMD5__&deviceId=__DEVICE_ID__&oaid=__OAID__&target=__TARGET__&anchor=__ANCHOR__&work=__WORK__&stageType=__STAGE_TYPE__&playDuration=__PLAY_DURATION__&iyunId=__IYUNID__&muser=__MUSER__&pod=__PODCAST__&podType=__PODTYPE__&ap=__AD_POS__&apc=__AD_POC__&sc=__SOURCE__&so=__MSAS__&owp=__OWP__&ov=__OS_VER__&zz=846596&yy=90000003\",\"monitorType\":\"ytg.inter\",\"videoValidPlayDuration\":2}],\"videoBreak\":[{\"url\":\"http://iad.service.163.org/video.gif?ytgReq=A01dzDwiujL45bL--E43ad_n_wawRfs1FWaRAaN-bN9b5UCxzitKgcXaAIl5cGbmbm1nhFUDs_quGZLVgg2w6BelIe3mYFDhEWhtNEd0aYdcWIIXcjn_cb6OO8JuCyCwnKEjXYt0iQqFesI2rb8rSnnweusKs6NQd27RhD-ES25FxVAJ8oGbu07xUXzrNSGht9bi6pF1iDJ_o5xQyDIsrJZ--9DvOzFiMlTwjlZwSdNu0fCec8JrksT79hl88LF785Kr4qp2PV_wvfyaWX87KXQWMUHeBrJqmpXnOKKHbxRTyUZQy7unJi43Mv9GL-8PbBHc6tlhkev9WFH82IHXhXWbB7yFemmQ8R8UOXpak7Nj5Wix8Xz7SfnHdhdPcrJkCoXwTKWOqiJw-wKClwPfmuaCipbkOuxtLq2Kzw33MkZz9L62tLiB-Nwx1l45--zuWKhr2tfvK5iFJDyYtxu6e-i31YpBsa0ooNYS9B57QAJR4kY_irh68WJseLxxRwJ4xM7wdSVlQl0xyRNydYvuU5kCbDT2L33A8g9BXi9YJe5N1eaODcdaLCHoj-99D467Zpc&t=__TIME__&ni=__IESID__&mo=__OS__&ns=116.25.63.218&m0=__OPENUDID__&m0a=__DUID__&m1=__ANDROIDID1__&m1a=__ANDROIDID__&m2=__IMEI__&m4=__AAID__&m5=__IDFA__&m6=__MAC1__&m6a=__MAC__&nn=__APP__&ur=__URS__&mu=__MURS__&mo1=__OS1__&nws=__NWS__&op=__OP__&o=__LP__&la=__LA__&lo=__LO__&laot=__LAOT__&meid=__MEID__&mcid=__MCID__&ua=__UA__&wp=G3f39Ou_HmzzqMR6M-06cgohIcUrQPQikCWWl6Gdhe9fRnhjkGQfI64ds5Bx2SAcJ_a_HOsYBNlMt5EvXVd-LYNs-G0WqVBjW01CnuPqaZduf1JpnNJgUySPuGtymyjQo3wKc2kGUfVUpV1Q2bU0Pldu1o4ICnnr3SGrXNgHs65uuzh5lAIeYpcGr0eFKg1Wqd8RGfGn_CM1YCrXYxYl-0Fw-HlZFEN1eT79X7qhVgxYpI12fL-lMjoOar5gkDp0OOOAfZ8urDlaZyfFUn0xv-2U_TricVC9AWPKIEqyQq-xncjJRued2-1TQgTjeUs7mFKhBt5s-SqSfpELpwaeFtvSaVq3CmQKSxkrklhQT0g=&ugcId=__UGCID__&ugcType=__UGCTYPE__&m2md5=__IMEIMD5__&m5md5=__IDFAMD5__&deviceId=__DEVICE_ID__&oaid=__OAID__&target=__TARGET__&anchor=__ANCHOR__&work=__WORK__&stageType=__STAGE_TYPE__&playDuration=__PLAY_DURATION__&iyunId=__IYUNID__&muser=__MUSER__&pod=__PODCAST__&podType=__PODTYPE__&ap=__AD_POS__&apc=__AD_POC__&sc=__SOURCE__&so=__MSAS__&owp=__OWP__&ov=__OS_VER__&zz=846596&yy=90000003\",\"monitorType\":\"ytg.inter\",\"videoValidPlayDuration\":null}],\"videoOver\":[{\"url\":\"http://iad.service.163.org/video.gif?ytgReq=A01dzDwiujL45bL--E43ad_n_wawRfs1FWaRAaN-bN9b5UCxzitKgcXaAIl5cGbmbm1nhFUDs_quGZLVgg2w6BelIe3mYFDhEWhtNEd0aYdcWIIXcjn_cb6OO8JuCyCwnKEjXYt0iQqFesI2rb8rSnnweusKs6NQd27RhD-ES25FxVAJ8oGbu07xUXzrNSGht9bi6pF1iDJ_o5xQyDIsrJZ--9DvOzFiMlTwjlZwSdNu0fCec8JrksT79hl88LF785Kr4qp2PV_wvfyaWX87KXQWMUHeBrJqmpXnOKKHbxRTyUZQy7unJi43Mv9GL-8PbBHc6tlhkev9WFH82IHXhXWbB7yFemmQ8R8UOXpak7Nj5Wix8Xz7SfnHdhdPcrJkCoXwTKWOqiJw-wKClwPfmuaCipbkOuxtLq2Kzw33MkZz9L62tLiB-Nwx1l45--zuWKhr2tfvK5iFJDyYtxu6e-i31YpBsa0ooNYS9B57QAJR4kY_irh68WJseLxxRwJ4xM7wdSVlQl0xyRNydYvuU5kCbDT2L33A8g9BXi9YJe5N1eaODcdaLCHoj-99D467Zpc&t=__TIME__&ni=__IESID__&mo=__OS__&ns=116.25.63.218&m0=__OPENUDID__&m0a=__DUID__&m1=__ANDROIDID1__&m1a=__ANDROIDID__&m2=__IMEI__&m4=__AAID__&m5=__IDFA__&m6=__MAC1__&m6a=__MAC__&nn=__APP__&ur=__URS__&mu=__MURS__&mo1=__OS1__&nws=__NWS__&op=__OP__&o=__LP__&la=__LA__&lo=__LO__&laot=__LAOT__&meid=__MEID__&mcid=__MCID__&ua=__UA__&wp=G3f39Ou_HmzzqMR6M-06cgohIcUrQPQikCWWl6Gdhe9fRnhjkGQfI64ds5Bx2SAcJ_a_HOsYBNlMt5EvXVd-LYNs-G0WqVBjW01CnuPqaZduf1JpnNJgUySPuGtymyjQo3wKc2kGUfVUpV1Q2bU0Pldu1o4ICnnr3SGrXNgHs65uuzh5lAIeYpcGr0eFKg1Wqd8RGfGn_CM1YCrXYxYl-0Fw-HlZFEN1eT79X7qhVgxYpI12fL-lMjoOar5gkDp0OOOAfZ8urDlaZyfFUn0xv-2U_TricVC9AWPKIEqyQq-xncjJRued2-1TQgTjeUs7mFKhBt5s-SqSfpELpwaeFtvSaVq3CmQKSxkrklhQT0g=&ugcId=__UGCID__&ugcType=__UGCTYPE__&m2md5=__IMEIMD5__&m5md5=__IDFAMD5__&deviceId=__DEVICE_ID__&oaid=__OAID__&target=__TARGET__&anchor=__ANCHOR__&work=__WORK__&stageType=__STAGE_TYPE__&playDuration=__PLAY_DURATION__&iyunId=__IYUNID__&muser=__MUSER__&pod=__PODCAST__&podType=__PODTYPE__&ap=__AD_POS__&apc=__AD_POC__&sc=__SOURCE__&so=__MSAS__&owp=__OWP__&ov=__OS_VER__&zz=846596&yy=90000003\",\"monitorType\":\"ytg.inter\",\"videoValidPlayDuration\":null}]},\"monitorConversionMap\":{},\"feedbackInfo\":{\"feedbackEnable\":true,\"title\":\"你觉得这条广告怎么样？\",\"action\":[{\"type\":3,\"text\":\"重复收到相似内容\",\"url\":null},{\"type\":4,\"text\":\"不喜欢该品牌\",\"url\":null},{\"type\":5,\"text\":\"不喜欢旅游服务行业类广告\",\"url\":null},{\"type\":6,\"text\":\"不愿看到广告\",\"url\":null},{\"type\":2,\"text\":\"直接关闭\",\"url\":null},{\"type\":1,\"text\":\"我要投诉\",\"url\":\"https://mp.music.163.com/600948c936c13f4d09752e73/commit/index.html?feedbackSource=2400\"}],\"loadingSkipAction\":null,\"adInfo\":{\"adId\":\"713156\",\"industryId\":\"35\",\"sponsorGroupId\":\"21522\",\"customerId\":null}},\"incentiveInfo\":null,\"generalRightsInfo\":null,\"incentiveMode\":null,\"bannerContextMonitor\":null,\"universalLinkType\":0,\"scheme\":null,\"appName\":null,\"adVideoShowTime\":null,\"ctaLandingStrategy\":2,\"ctaLandingGapTime\":null}",
      "encodeId": "143395861380020366",
      "program": null,
      "event": null,
      "video": null,
      "song": null,
      "scm": "",
      "bannerBizType": "ad_banner"
    },
    {
      "imageUrl": "http://p1.music.126.net/OI3CZ7UueCEXEETpI48R7w==/109951169813411968.jpg",
      "targetId": 241493561,
      "adid": null,
      "targetType": 10,
      "titleColor": "red",
      "typeTitle": "新碟首发",
      "url": null,
      "exclusive": false,
      "monitorImpress": null,
      "monitorClick": null,
      "monitorType": null,
      "monitorImpressList": null,
      "monitorClickList": null,
      "monitorBlackList": null,
      "extMonitor": null,
      "extMonitorInfo": null,
      "adSource": null,
      "adLocation": null,
      "adDispatchJson": null,
      "encodeId": "241493561",
      "program": null,
      "event": null,
      "video": null,
      "song": null,
      "scm": "1.music-homepage.homepage_banner_force.banner.14890962.1410845257.null",
      "bannerBizType": "force_banner"
    },
    {
      "imageUrl": "http://iadmusicmat.music.126.net/8724694078374245abe26bff037f2529.jpg",
      "targetId": 8993816772047617000,
      "adid": "8993816772047616551",
      "targetType": 3000,
      "titleColor": "blue",
      "typeTitle": "广告",
      "url": "906936224",
      "exclusive": false,
      "monitorImpress": "",
      "monitorClick": "",
      "monitorType": null,
      "monitorImpressList": [],
      "monitorClickList": [],
      "monitorBlackList": null,
      "extMonitor": [
        {
          "monitorImpress": "http://iad.service.163.org/adx/me.gif?adx_req=_8uhXnFkqWIbsF-gm9RGq-ec8lvKjSefEOx7C-e9LhRnevwUgZTaNvS90QJi4oykqRLFlCAiYNMm6ZCTIiMWqtviik6QFbJXfzAsQETKYKrYXCR9d3jTGwHmrlE9o396_pxEiwQW2WGFK736UhUtDrxsbXDoSWfJUwNMXZ1arK8WgYx3ocZQyI4rwShFPJHvA_XuOO2TrFOpyif1-BC25CLkwJgUuAhztHfi6EB8E0N5MRbbHr7bxUNVRD_PoYCxA_XzxSEGa6AzHCgg1eIsBbYoujZNAXhaT7zVLJP8FTDoXdbwQp5ptM75Il4jk2dAn35Ma_lnHSOTE1VZa13BGsWqHsNw5i_vDZylI09BCWfEv0OCuwHPSOHSCDQ-sKxExUACuMlC25xmu-A1F1ZkeNVS5toBhV2rFWwkZEq__JOlisq0ZNv6Fn3KTM0cEUMfrA1Peplk_i4cd2mFoNouGnIROBDegj_UtVHMt_a-4S4Nh9hXIuOhNlCIMs59CN4nnRdE2uqslq615JC7awicNKgvFmG7UPf7fS6-2L0egmw91OlrfyFripvaNAw0yNVPVIZjO6lF-ajvpfNaj1oQUZ42EZj1qOKhKsKoqv2PcVuPPcHcLLMqeNU51gIDAgRpolPtdpEUumN7278CEyRMrBfSJ0zbIxVd2b87O9kE_qkYfzcR6SH0AoVGwuLiFhy5JSfuWGQ2jUTz7KOYUc6qVA&dsp=10001&zz=805398&yy=90000033&pp=&t=__TIME__&ni=__IESID__&mo=__OS__&ns=116.25.63.218&m0=__OPENUDID__&m0a=__DUID__&m1=__ANDROIDID1__&m1a=__ANDROIDID__&m2=__IMEI__&m4=__AAID__&m5=__IDFA__&m6=__MAC1__&m6a=__MAC__&nn=__APP__&ur=__URS__&mu=__MURS__&mo1=__OS1__&nws=__NWS__&op=__OP__&la=__LA__&lo=__LO__&laot=__LAOT__&meid=__MEID__&mcid=__MCID__&act=__ACT__&ua=__UA__&ugcId=__UGCID__&ugcType=__UGCTYPE__&m2md5=__IMEIMD5__&m5md5=__IDFAMD5__&deviceId=__DEVICE_ID__&oaid=__OAID__&target=__TARGET__&av=__APPVER__&anchor=__ANCHOR__&work=__WORK__&ivc_s=0&iyunId=__IYUNID__&muser=__MUSER__&pod=__PODCAST__&podType=__PODTYPE__&ap=__AD_POS__&apc=__AD_POC__&sc=__SOURCE__&so=__MSAS__&owp=__OWP__&ct=__CT__&as=__AS__&ic=__IC__&ds=__DEVICE_STRATEGY__&brt=&nsp=__NS__&ov=__OS_VER__&pi=__PRE_INS__&mt=__MACHINE_TYPE__&ivc_f=__IVC_F__&ivc_a=__IVC_A__&tfs=__TFS__&aefe=__AEFE__&aect=__AECT__&dp_app=__DP_APP__&is_ins=__IS_INS__&url=__URL__&con_info=__CONTEXT_INFO__&sos=__SOS__&sov=__SOS_VER__",
          "monitorClick": "http://iad.service.163.org/adx/mc.gif?adx_req=_8uhXnFkqWIbsF-gm9RGq-ec8lvKjSefEOx7C-e9LhRnevwUgZTaNvS90QJi4oykqRLFlCAiYNMm6ZCTIiMWqtviik6QFbJXfzAsQETKYKrYXCR9d3jTGwHmrlE9o396_pxEiwQW2WGFK736UhUtDrxsbXDoSWfJUwNMXZ1arK8WgYx3ocZQyI4rwShFPJHvA_XuOO2TrFOpyif1-BC25CLkwJgUuAhztHfi6EB8E0N5MRbbHr7bxUNVRD_PoYCxA_XzxSEGa6AzHCgg1eIsBbYoujZNAXhaT7zVLJP8FTDoXdbwQp5ptM75Il4jk2dAn35Ma_lnHSOTE1VZa13BGsWqHsNw5i_vDZylI09BCWfEv0OCuwHPSOHSCDQ-sKxExUACuMlC25xmu-A1F1ZkeNVS5toBhV2rFWwkZEq__JOlisq0ZNv6Fn3KTM0cEUMfrA1Peplk_i4cd2mFoNouGnIROBDegj_UtVHMt_a-4S4Nh9hXIuOhNlCIMs59CN4nnRdE2uqslq615JC7awicNKgvFmG7UPf7fS6-2L0egmw91OlrfyFripvaNAw0yNVPVIZjO6lF-ajvpfNaj1oQUZ42EZj1qOKhKsKoqv2PcVuPPcHcLLMqeNU51gIDAgRpolPtdpEUumN7278CEyRMrBfSJ0zbIxVd2b87O9kE_qkYfzcR6SH0AoVGwuLiFhy5JSfuWGQ2jUTz7KOYUc6qVA&dsp=10001&zz=805398&yy=90000033&pp=&t=__TIME__&ni=__IESID__&mo=__OS__&ns=116.25.63.218&m0=__OPENUDID__&m0a=__DUID__&m1=__ANDROIDID1__&m1a=__ANDROIDID__&m2=__IMEI__&m4=__AAID__&m5=__IDFA__&m6=__MAC1__&m6a=__MAC__&nn=__APP__&ur=__URS__&mu=__MURS__&mo1=__OS1__&nws=__NWS__&op=__OP__&la=__LA__&lo=__LO__&laot=__LAOT__&meid=__MEID__&mcid=__MCID__&act=__ACT__&ua=__UA__&ugcId=__UGCID__&ugcType=__UGCTYPE__&m2md5=__IMEIMD5__&m5md5=__IDFAMD5__&deviceId=__DEVICE_ID__&oaid=__OAID__&target=__TARGET__&av=__APPVER__&anchor=__ANCHOR__&work=__WORK__&ivc_s=0&iyunId=__IYUNID__&muser=__MUSER__&pod=__PODCAST__&podType=__PODTYPE__&ap=__AD_POS__&apc=__AD_POC__&sc=__SOURCE__&so=__MSAS__&owp=__OWP__&ct=__CT__&as=__AS__&ic=__IC__&ds=__DEVICE_STRATEGY__&brt=&nsp=__NS__&ov=__OS_VER__&pi=__PRE_INS__&mt=__MACHINE_TYPE__&ivc_f=__IVC_F__&ivc_a=__IVC_A__&tfs=__TFS__&aefe=__AEFE__&aect=__AECT__&dp_app=__DP_APP__&is_ins=__IS_INS__&url=__URL__&con_info=__CONTEXT_INFO__&sos=__SOS__&sov=__SOS_VER__",
          "monitorType": "adx.inter",
          "monitorConversion": null
        },
        {
          "monitorImpress": "https://api.kkmh.com/kk/data/promote/click/mai_sui?idfa=__IDFA__&imei=__IMEI__&android_id=__ANDROIDID__&mac=__MAC__&os=__OS__&ua=__UA__&ip=116.25.63.218&osver=__OSVER__&click_time=__CLICKTIME__&click_id=ASEwXJYB-gH6AQ.ac9d7870b76184f2d867f0877b7ddbbffBg4bHB0eHzI8PUo1LivDU1xAAJBU--mNpJTJFj3OslU4Ql34wb4C3L6e8jkggKEDKcSqwKrEuwCrQHtD64L7wKPDNIIswqVCdUK1gGZAVqaDbwQngjfCwwAOCAoQMjwzSCJUJ1QrWAZgCmAaZAVqaDd0FngjfC-YCpxKpEasCqxLsAqwPrQHtD64L7wKyDPICswq3EfkBuwi7D7wQvRH-Eb8Q&adid=682335&idfa_md5=__IDFAMD5__&imei_md5=__IMEIMD5__&oaid=__OAID__&oaid_md5=__OAIDMD5__&ad_name=__ADNAME__&creative_id=708376&sponsor_id=210096702&plan_id=837147&launch_type=comic&launch_id=591007",
          "monitorClick": "https://api.kkmh.com/kk/data/promote/click/mai_sui?idfa=__IDFA__&imei=__IMEI__&android_id=__ANDROIDID__&mac=__MAC__&os=__OS__&ua=__UA__&ip=116.25.63.218&osver=__OSVER__&click_time=__CLICKTIME__&click_id=ASEwXJYB-gH6AQ.ac9d7870b76184f2d867f0877b7ddbbffBg4bHB0eHzI8PUo1LivDU1xAAJBU--mNpJTJFj3OslU4Ql34wb4C3L6e8jkggKEDKcSqwKrEuwCrQHtD64L7wKPDNIIswqVCdUK1gGZAVqaDbwQngjfCwwAOCAoQMjwzSCJUJ1QrWAZgCmAaZAVqaDd0FngjfC-YCpxKpEasCqxLsAqwPrQHtD64L7wKyDPICswq3EfkBuwi7D7wQvRH-Eb8Q&adid=682335&idfa_md5=__IDFAMD5__&imei_md5=__IMEIMD5__&oaid=__OAID__&oaid_md5=__OAIDMD5__&ad_name=__ADNAME__&creative_id=708376&sponsor_id=210096702&plan_id=837147&launch_type=comic&launch_id=591007",
          "monitorType": "api.kkmh.comexter",
          "monitorConversion": null
        },
        {
          "monitorImpress": "http://iad.service.163.org/me.gif?ytgReq=A01jAq6qnftIXxMqextbGutF52riQpUFJCAHtOSM99dINJ-WopKzb2CUtwfnpfpgmUCP5IosbrLaW6xaFzAXkPWubHuCi6CrUGRrZ1uj1n6dfkkIJ0LcOT6FrCllWLzHY8im9VhzKZZbbspcCUqj5C5uPO8aUdIjDtWQLyQEz3dvYsMbfWfgDJrcmsT-g7UiVjbw_buE1Q8peR9vqPBZU5VbJFJuuZpPObYhUWk1ZslUox78KNRyDAOcbduS4zopN3VC6l1dzQCp1Iev7JEv6SQr856n04qndAKxOeLagB0J22LyTGShoigEEWfGsvh2GsEiJWYTUzGqHeOX2uErrpbU2Noi8nKT9LyGMMFAriGehKPAAW9hUdDaS1Iz4VI53S_iXaPsLPyvHxzge75_0J2LAuPPn8lZaKGzEtksxMTjynZxuwcQDw3P8N8SCxFdjRgAq1uiZ8PWylxUK1T0QMFeNHnqYe123pa5Uvzx2IvxisFWafq-gTH7uSFP8fgq-lVdku2rsYbSfFofbrITvOL9UJamarOxneZrt5P4NphRi2BCET2ClQRZV_ls6HaLdigmVNsyCTJit1in9TVoj6Pn2NHo0bRWzzPErQK2YUojzuST9GQ2zMUX-CJ6gcjMxVX&t=__TIME__&ni=__IESID__&mo=__OS__&ns=116.25.63.218&m0=__OPENUDID__&m0a=__DUID__&m1=__ANDROIDID1__&m1a=__ANDROIDID__&m2=__IMEI__&m4=__AAID__&m5=__IDFA__&m6=__MAC1__&m6a=__MAC__&nn=__APP__&ur=__URS__&mu=__MURS__&mo1=__OS1__&nws=__NWS__&op=__OP__&o=__LP__&la=__LA__&lo=__LO__&laot=__LAOT__&meid=__MEID__&mcid=__MCID__&ua=__UA__&wp=6fe26mKj1GVvge2qOc3QJfUKau67NFqKWLWqh7S6fA1uGKXDzDKhD0s3mKkrwxKwkpCbCxDvQ6RRfZ7nDUEh3YNs-G0WqVBjW01CnuPqaZeI1RScj6uM-PFc0joKeUiFP1ljxTyi1TAkGACArZzHvNayi7653ohXRLvCDdBiuALKiJ225bYDrOibO_32RbN_PjBimUgqPWIV6EItgayoj0ncz_3hxk7uA24n6p6kXB5GEgql_IowC2ME5t2_7taW3XiKnXE4hBeKhdAew5JBqci7c5jJj3_HiYW5_EhTXSfSVZ66XMxWq9GzOOMZOGXAmFKhBt5s-SqSfpELpwaeFtvSaVq3CmQKSxkrklhQT0g=&ugcId=__UGCID__&ugcType=__UGCTYPE__&m2md5=__IMEIMD5__&m5md5=__IDFAMD5__&deviceId=__DEVICE_ID__&oaid=__OAID__&target=__TARGET__&anchor=__ANCHOR__&work=__WORK__&ivc_s=0&iyunId=__IYUNID__&muser=__MUSER__&pod=__PODCAST__&podType=__PODTYPE__&ap=__AD_POS__&apc=__AD_POC__&sc=__SOURCE__&so=__MSAS__&owp=__OWP__&ct=__CT__&as=__AS__&pi=__PRE_INS__&mt=__MACHINE_TYPE__&ivc_f=__IVC_F__&ivc_a=__IVC_A__&con_info=__CONTEXT_INFO__&ov=__OS_VER__&ext=__EXT__&zz=805398&yy=90000033",
          "monitorClick": "http://iad.service.163.org/mc.gif?ytgReq=A01jAq6qnftIXxMqextbGutF52riQpUFJCAHtOSM99dINJ-WopKzb2CUtwfnpfpgmUCP5IosbrLaW6xaFzAXkPWubHuCi6CrUGRrZ1uj1n6dfkkIJ0LcOT6FrCllWLzHY8im9VhzKZZbbspcCUqj5C5uPO8aUdIjDtWQLyQEz3dvYsMbfWfgDJrcmsT-g7UiVjbw_buE1Q8peR9vqPBZU5VbJFJuuZpPObYhUWk1ZslUox78KNRyDAOcbduS4zopN3VC6l1dzQCp1Iev7JEv6SQr856n04qndAKxOeLagB0J22LyTGShoigEEWfGsvh2GsEiJWYTUzGqHeOX2uErrpbU2Noi8nKT9LyGMMFAriGehKPAAW9hUdDaS1Iz4VI53S_iXaPsLPyvHxzge75_0J2LAuPPn8lZaKGzEtksxMTjynZxuwcQDw3P8N8SCxFdjRgAq1uiZ8PWylxUK1T0QMFeNHnqYe123pa5Uvzx2IvxisFWafq-gTH7uSFP8fgq-lVdku2rsYbSfFofbrITvOL9UJamarOxneZrt5P4NphRi2BCET2ClQRZV_ls6HaLdigmVNsyCTJit1in9TVoj6Pn2NHo0bRWzzPErQK2YUojzuST9GQ2zMUX-CJ6gcjMxVX&t=__TIME__&ni=__IESID__&mo=__OS__&ns=116.25.63.218&m0=__OPENUDID__&m0a=__DUID__&m1=__ANDROIDID1__&m1a=__ANDROIDID__&m2=__IMEI__&m4=__AAID__&m5=__IDFA__&m6=__MAC1__&m6a=__MAC__&nn=__APP__&ur=__URS__&mu=__MURS__&mo1=__OS1__&nws=__NWS__&op=__OP__&o=__LP__&la=__LA__&lo=__LO__&laot=__LAOT__&meid=__MEID__&mcid=__MCID__&ua=__UA__&wp=6fe26mKj1GVvge2qOc3QJfUKau67NFqKWLWqh7S6fA1uGKXDzDKhD0s3mKkrwxKwkpCbCxDvQ6RRfZ7nDUEh3YNs-G0WqVBjW01CnuPqaZeI1RScj6uM-PFc0joKeUiFP1ljxTyi1TAkGACArZzHvNayi7653ohXRLvCDdBiuALKiJ225bYDrOibO_32RbN_PjBimUgqPWIV6EItgayoj0ncz_3hxk7uA24n6p6kXB5GEgql_IowC2ME5t2_7taW3XiKnXE4hBeKhdAew5JBqci7c5jJj3_HiYW5_EhTXSfSVZ66XMxWq9GzOOMZOGXAmFKhBt5s-SqSfpELpwaeFtvSaVq3CmQKSxkrklhQT0g=&ugcId=__UGCID__&ugcType=__UGCTYPE__&m2md5=__IMEIMD5__&m5md5=__IDFAMD5__&deviceId=__DEVICE_ID__&oaid=__OAID__&target=__TARGET__&anchor=__ANCHOR__&work=__WORK__&ivc_s=0&iyunId=__IYUNID__&muser=__MUSER__&pod=__PODCAST__&podType=__PODTYPE__&ap=__AD_POS__&apc=__AD_POC__&sc=__SOURCE__&so=__MSAS__&owp=__OWP__&ct=__CT__&as=__AS__&pi=__PRE_INS__&mt=__MACHINE_TYPE__&ivc_f=__IVC_F__&ivc_a=__IVC_A__&con_info=__CONTEXT_INFO__&ov=__OS_VER__&ext=__EXT__&zz=805398&yy=90000033",
          "monitorType": "ytg.inter",
          "monitorConversion": null
        }
      ],
      "extMonitorInfo": {
        "aliAdId": "",
        "reqId": "adx_req=_8uhXnFkqWIbsF-gm9RGq-ec8lvKjSefEOx7C-e9LhRnevwUgZTaNvS90QJi4oykqRLFlCAiYNMm6ZCTIiMWqtviik6QFbJXfzAsQETKYKrYXCR9d3jTGwHmrlE9o396_pxEiwQW2WGFK736UhUtDrxsbXDoSWfJUwNMXZ1arK8WgYx3ocZQyI4rwShFPJHvA_XuOO2TrFOpyif1-BC25CLkwJgUuAhztHfi6EB8E0N5MRbbHr7bxUNVRD_PoYCxA_XzxSEGa6AzHCgg1eIsBbYoujZNAXhaT7zVLJP8FTDoXdbwQp5ptM75Il4jk2dAn35Ma_lnHSOTE1VZa13BGsWqHsNw5i_vDZylI09BCWfEv0OCuwHPSOHSCDQ-sKxExUACuMlC25xmu-A1F1ZkeNVS5toBhV2rFWwkZEq__JOlisq0ZNv6Fn3KTM0cEUMfrA1Peplk_i4cd2mFoNouGnIROBDegj_UtVHMt_a-4S4Nh9hXIuOhNlCIMs59CN4nnRdE2uqslq615JC7awicNKgvFmG7UPf7fS6-2L0egmw91OlrfyFripvaNAw0yNVPVIZjO6lF-ajvpfNaj1oQUZ42EZj1qOKhKsKoqv2PcVuPPcHcLLMqeNU51gIDAgRpolPtdpEUumN7278CEyRMrBfSJ0zbIxVd2b87O9kE_qkYfzcR6SH0AoVGwuLiFhy5JSfuWGQ2jUTz7KOYUc6qVA",
        "requestid": "",
        "orderId": "",
        "ad_type": "",
        "dspId": "10001",
        "price": "",
        "refer": "",
        "needClickPosInfo": false,
        "mode": "",
        "scm": "",
        "spm": "",
        "displayMd5Sign": "",
        "monitorType": "1"
      },
      "adSource": "1",
      "adLocation": "10004",
      "adDispatchJson": "{\"sourceType\":0,\"pkgName\":\"\",\"productType\":201,\"androidAppInfo\":{\"pkgName\":\"\",\"md5\":\"\",\"size\":0,\"productName\":\"快看漫画\",\"version\":\"\",\"developer\":null,\"permissionDescUrl\":null,\"privacyPolicyUrl\":null,\"appUpdateTime\":null},\"monitorConversionList\":[],\"adMaterial\":{\"nativeResource\":null,\"picList\":[],\"videoList\":[{\"threadId\":null,\"coverUrl\":\"http://iadmusicmat.music.126.net/8724694078374245abe26bff037f2529.jpg\",\"height\":720,\"width\":1280,\"title\":null,\"vid\":null,\"urlInfo\":{\"id\":null,\"url\":\"http://iadmusicmatvideo.music.126.net/ab2adecf05a5489bb50a3e395745a9f1.mp4\",\"size\":null,\"validityTime\":null,\"r\":null},\"durationms\":null,\"subscribed\":null,\"playTime\":null,\"externalVideo\":true,\"userType\":0,\"videoTriggerTime\":null,\"layerTriggerTime\":null,\"videoFileSize\":null}],\"audioList\":[],\"minorVideoList\":[],\"videoAutoPlayWithoutWifi\":false,\"easyPlayable\":null},\"linkingUseNewMaterial\":{\"nativeResource\":null,\"picList\":[],\"videoList\":[],\"audioList\":[],\"minorVideoList\":[],\"videoAutoPlayWithoutWifi\":false,\"easyPlayable\":null},\"adSponsor\":{\"userId\":0,\"nickname\":\"快看漫画\",\"avatar\":\"http://iadmat.nosdn.127.net/b4bf7d171b694e74bdaa294eb5e3f30e.png\",\"userType\":0,\"authStatus\":0},\"creativeType\":2,\"pattern\":\"40006\",\"adContentText\":\"\",\"showTime\":5.0,\"contextInfo\":{\"material_id\":\"805398\",\"req_id\":\"c9d7870b76184f2d867f0877b7ddbbff\",\"dsp_id\":\"10001\",\"tag_id\":\"90000033\",\"deal_id\":null,\"creative_id\":\"708376\",\"related_deal_id\":null,\"related_material_id\":null,\"invocation_style\":null,\"native_id\":\"2028601\",\"startup_type\":null,\"api_type\":3,\"adx_alg\":\"{\\\"user_factor_total\\\":1.0,\\\"win_by_factor\\\":0}\",\"sponsor_id\":null,\"request_source\":null,\"monitor_touch_type\":1,\"vip_payment_type\":1},\"invocationStyleInfo\":{\"invocationStyle\":0,\"invocationIcon\":null,\"invocationStyleContent\":null,\"slideDistance\":null,\"activeBeginTime\":0,\"activeEndTime\":999,\"iconShowBeginTime\":null,\"iconShowEndTime\":null},\"c2sVideoActionMonitor\":{\"videoPlay\":null,\"videoAutoPlay\":null,\"videoValidPlay\":null,\"videoBreak\":null,\"videoOver\":null},\"s2sVideoActionMonitor\":{\"videoPlay\":[{\"url\":\"http://iad.service.163.org/video.gif?ytgReq=A01jAq6qnftIXxMqextbGutF52riQpUFJCAHtOSM99dINJ-WopKzb2CUtwfnpfpgmUCP5IosbrLaW6xaFzAXkPWubHuCi6CrUGRrZ1uj1n6dfkkIJ0LcOT6FrCllWLzHY8im9VhzKZZbbspcCUqj5C5uPO8aUdIjDtWQLyQEz3dvYsMbfWfgDJrcmsT-g7UiVjbw_buE1Q8peR9vqPBZU5VbJFJuuZpPObYhUWk1ZslUox78KNRyDAOcbduS4zopN3VC6l1dzQCp1Iev7JEv6SQr856n04qndAKxOeLagB0J22LyTGShoigEEWfGsvh2GsEiJWYTUzGqHeOX2uErrpbU2Noi8nKT9LyGMMFAriGehKPAAW9hUdDaS1Iz4VI53S_iXaPsLPyvHxzge75_0J2LAuPPn8lZaKGzEtksxMTjynZxuwcQDw3P8N8SCxFdjRgAq1uiZ8PWylxUK1T0QMFeNHnqYe123pa5Uvzx2IvxisFWafq-gTH7uSFP8fgq-lVdku2rsYbSfFofbrITvOL9UJamarOxneZrt5P4NphRi2BCET2ClQRZV_ls6HaLdigmVNsyCTJit1in9TVoj6Pn2NHo0bRWzzPErQK2YUojzuST9GQ2zMUX-CJ6gcjMxVX&t=__TIME__&ni=__IESID__&mo=__OS__&ns=116.25.63.218&m0=__OPENUDID__&m0a=__DUID__&m1=__ANDROIDID1__&m1a=__ANDROIDID__&m2=__IMEI__&m4=__AAID__&m5=__IDFA__&m6=__MAC1__&m6a=__MAC__&nn=__APP__&ur=__URS__&mu=__MURS__&mo1=__OS1__&nws=__NWS__&op=__OP__&o=__LP__&la=__LA__&lo=__LO__&laot=__LAOT__&meid=__MEID__&mcid=__MCID__&ua=__UA__&wp=6fe26mKj1GVvge2qOc3QJfUKau67NFqKWLWqh7S6fA1uGKXDzDKhD0s3mKkrwxKwkpCbCxDvQ6RRfZ7nDUEh3YNs-G0WqVBjW01CnuPqaZeI1RScj6uM-PFc0joKeUiFP1ljxTyi1TAkGACArZzHvNayi7653ohXRLvCDdBiuALKiJ225bYDrOibO_32RbN_PjBimUgqPWIV6EItgayoj0ncz_3hxk7uA24n6p6kXB5GEgql_IowC2ME5t2_7taW3XiKnXE4hBeKhdAew5JBqci7c5jJj3_HiYW5_EhTXSfSVZ66XMxWq9GzOOMZOGXAmFKhBt5s-SqSfpELpwaeFtvSaVq3CmQKSxkrklhQT0g=&ugcId=__UGCID__&ugcType=__UGCTYPE__&m2md5=__IMEIMD5__&m5md5=__IDFAMD5__&deviceId=__DEVICE_ID__&oaid=__OAID__&target=__TARGET__&anchor=__ANCHOR__&work=__WORK__&stageType=__STAGE_TYPE__&playDuration=__PLAY_DURATION__&iyunId=__IYUNID__&muser=__MUSER__&pod=__PODCAST__&podType=__PODTYPE__&ap=__AD_POS__&apc=__AD_POC__&sc=__SOURCE__&so=__MSAS__&owp=__OWP__&ov=__OS_VER__&zz=805398&yy=90000033\",\"monitorType\":\"ytg.inter\",\"videoValidPlayDuration\":null}],\"videoAutoPlay\":[{\"url\":\"http://iad.service.163.org/video.gif?ytgReq=A01jAq6qnftIXxMqextbGutF52riQpUFJCAHtOSM99dINJ-WopKzb2CUtwfnpfpgmUCP5IosbrLaW6xaFzAXkPWubHuCi6CrUGRrZ1uj1n6dfkkIJ0LcOT6FrCllWLzHY8im9VhzKZZbbspcCUqj5C5uPO8aUdIjDtWQLyQEz3dvYsMbfWfgDJrcmsT-g7UiVjbw_buE1Q8peR9vqPBZU5VbJFJuuZpPObYhUWk1ZslUox78KNRyDAOcbduS4zopN3VC6l1dzQCp1Iev7JEv6SQr856n04qndAKxOeLagB0J22LyTGShoigEEWfGsvh2GsEiJWYTUzGqHeOX2uErrpbU2Noi8nKT9LyGMMFAriGehKPAAW9hUdDaS1Iz4VI53S_iXaPsLPyvHxzge75_0J2LAuPPn8lZaKGzEtksxMTjynZxuwcQDw3P8N8SCxFdjRgAq1uiZ8PWylxUK1T0QMFeNHnqYe123pa5Uvzx2IvxisFWafq-gTH7uSFP8fgq-lVdku2rsYbSfFofbrITvOL9UJamarOxneZrt5P4NphRi2BCET2ClQRZV_ls6HaLdigmVNsyCTJit1in9TVoj6Pn2NHo0bRWzzPErQK2YUojzuST9GQ2zMUX-CJ6gcjMxVX&t=__TIME__&ni=__IESID__&mo=__OS__&ns=116.25.63.218&m0=__OPENUDID__&m0a=__DUID__&m1=__ANDROIDID1__&m1a=__ANDROIDID__&m2=__IMEI__&m4=__AAID__&m5=__IDFA__&m6=__MAC1__&m6a=__MAC__&nn=__APP__&ur=__URS__&mu=__MURS__&mo1=__OS1__&nws=__NWS__&op=__OP__&o=__LP__&la=__LA__&lo=__LO__&laot=__LAOT__&meid=__MEID__&mcid=__MCID__&ua=__UA__&wp=6fe26mKj1GVvge2qOc3QJfUKau67NFqKWLWqh7S6fA1uGKXDzDKhD0s3mKkrwxKwkpCbCxDvQ6RRfZ7nDUEh3YNs-G0WqVBjW01CnuPqaZeI1RScj6uM-PFc0joKeUiFP1ljxTyi1TAkGACArZzHvNayi7653ohXRLvCDdBiuALKiJ225bYDrOibO_32RbN_PjBimUgqPWIV6EItgayoj0ncz_3hxk7uA24n6p6kXB5GEgql_IowC2ME5t2_7taW3XiKnXE4hBeKhdAew5JBqci7c5jJj3_HiYW5_EhTXSfSVZ66XMxWq9GzOOMZOGXAmFKhBt5s-SqSfpELpwaeFtvSaVq3CmQKSxkrklhQT0g=&ugcId=__UGCID__&ugcType=__UGCTYPE__&m2md5=__IMEIMD5__&m5md5=__IDFAMD5__&deviceId=__DEVICE_ID__&oaid=__OAID__&target=__TARGET__&anchor=__ANCHOR__&work=__WORK__&stageType=__STAGE_TYPE__&playDuration=__PLAY_DURATION__&iyunId=__IYUNID__&muser=__MUSER__&pod=__PODCAST__&podType=__PODTYPE__&ap=__AD_POS__&apc=__AD_POC__&sc=__SOURCE__&so=__MSAS__&owp=__OWP__&ov=__OS_VER__&zz=805398&yy=90000033\",\"monitorType\":\"ytg.inter\",\"videoValidPlayDuration\":null}],\"videoValidPlay\":[{\"url\":\"https://api.kkmh.com/kk/data/promote/click/mai_sui?idfa=__IDFA__&imei=__IMEI__&android_id=__ANDROIDID__&mac=__MAC__&os=__OS__&ua=__UA__&ip=116.25.63.218&osver=__OSVER__&click_time=__CLICKTIME__&click_id=ASEwXJYB-gH6AQ.ac9d7870b76184f2d867f0877b7ddbbffBg4bHB0eHzI8PUo1LivDU1xAAJBU--mNpJTJFj3OslU4Ql34wb4C3L6e8jkggKEDKcSqwKrEuwCrQHtD64L7wKPDNIIswqVCdUK1gGZAVqaDbwQngjfCwwAOCAoQMjwzSCJUJ1QrWAZgCmAaZAVqaDd0FngjfC-YCpxKpEasCqxLsAqwPrQHtD64L7wKyDPICswq3EfkBuwi7D7wQvRH-Eb8Q&adid=682335&idfa_md5=__IDFAMD5__&imei_md5=__IMEIMD5__&oaid=__OAID__&oaid_md5=__OAIDMD5__&ad_name=__ADNAME__&creative_id=708376&sponsor_id=210096702&plan_id=837147&launch_type=comic&launch_id=591007\",\"monitorType\":\"api.kkmh.comexter\",\"videoValidPlayDuration\":2},{\"url\":\"http://iad.service.163.org/video.gif?ytgReq=A01jAq6qnftIXxMqextbGutF52riQpUFJCAHtOSM99dINJ-WopKzb2CUtwfnpfpgmUCP5IosbrLaW6xaFzAXkPWubHuCi6CrUGRrZ1uj1n6dfkkIJ0LcOT6FrCllWLzHY8im9VhzKZZbbspcCUqj5C5uPO8aUdIjDtWQLyQEz3dvYsMbfWfgDJrcmsT-g7UiVjbw_buE1Q8peR9vqPBZU5VbJFJuuZpPObYhUWk1ZslUox78KNRyDAOcbduS4zopN3VC6l1dzQCp1Iev7JEv6SQr856n04qndAKxOeLagB0J22LyTGShoigEEWfGsvh2GsEiJWYTUzGqHeOX2uErrpbU2Noi8nKT9LyGMMFAriGehKPAAW9hUdDaS1Iz4VI53S_iXaPsLPyvHxzge75_0J2LAuPPn8lZaKGzEtksxMTjynZxuwcQDw3P8N8SCxFdjRgAq1uiZ8PWylxUK1T0QMFeNHnqYe123pa5Uvzx2IvxisFWafq-gTH7uSFP8fgq-lVdku2rsYbSfFofbrITvOL9UJamarOxneZrt5P4NphRi2BCET2ClQRZV_ls6HaLdigmVNsyCTJit1in9TVoj6Pn2NHo0bRWzzPErQK2YUojzuST9GQ2zMUX-CJ6gcjMxVX&t=__TIME__&ni=__IESID__&mo=__OS__&ns=116.25.63.218&m0=__OPENUDID__&m0a=__DUID__&m1=__ANDROIDID1__&m1a=__ANDROIDID__&m2=__IMEI__&m4=__AAID__&m5=__IDFA__&m6=__MAC1__&m6a=__MAC__&nn=__APP__&ur=__URS__&mu=__MURS__&mo1=__OS1__&nws=__NWS__&op=__OP__&o=__LP__&la=__LA__&lo=__LO__&laot=__LAOT__&meid=__MEID__&mcid=__MCID__&ua=__UA__&wp=6fe26mKj1GVvge2qOc3QJfUKau67NFqKWLWqh7S6fA1uGKXDzDKhD0s3mKkrwxKwkpCbCxDvQ6RRfZ7nDUEh3YNs-G0WqVBjW01CnuPqaZeI1RScj6uM-PFc0joKeUiFP1ljxTyi1TAkGACArZzHvNayi7653ohXRLvCDdBiuALKiJ225bYDrOibO_32RbN_PjBimUgqPWIV6EItgayoj0ncz_3hxk7uA24n6p6kXB5GEgql_IowC2ME5t2_7taW3XiKnXE4hBeKhdAew5JBqci7c5jJj3_HiYW5_EhTXSfSVZ66XMxWq9GzOOMZOGXAmFKhBt5s-SqSfpELpwaeFtvSaVq3CmQKSxkrklhQT0g=&ugcId=__UGCID__&ugcType=__UGCTYPE__&m2md5=__IMEIMD5__&m5md5=__IDFAMD5__&deviceId=__DEVICE_ID__&oaid=__OAID__&target=__TARGET__&anchor=__ANCHOR__&work=__WORK__&stageType=__STAGE_TYPE__&playDuration=__PLAY_DURATION__&iyunId=__IYUNID__&muser=__MUSER__&pod=__PODCAST__&podType=__PODTYPE__&ap=__AD_POS__&apc=__AD_POC__&sc=__SOURCE__&so=__MSAS__&owp=__OWP__&ov=__OS_VER__&zz=805398&yy=90000033\",\"monitorType\":\"ytg.inter\",\"videoValidPlayDuration\":2}],\"videoBreak\":[{\"url\":\"http://iad.service.163.org/video.gif?ytgReq=A01jAq6qnftIXxMqextbGutF52riQpUFJCAHtOSM99dINJ-WopKzb2CUtwfnpfpgmUCP5IosbrLaW6xaFzAXkPWubHuCi6CrUGRrZ1uj1n6dfkkIJ0LcOT6FrCllWLzHY8im9VhzKZZbbspcCUqj5C5uPO8aUdIjDtWQLyQEz3dvYsMbfWfgDJrcmsT-g7UiVjbw_buE1Q8peR9vqPBZU5VbJFJuuZpPObYhUWk1ZslUox78KNRyDAOcbduS4zopN3VC6l1dzQCp1Iev7JEv6SQr856n04qndAKxOeLagB0J22LyTGShoigEEWfGsvh2GsEiJWYTUzGqHeOX2uErrpbU2Noi8nKT9LyGMMFAriGehKPAAW9hUdDaS1Iz4VI53S_iXaPsLPyvHxzge75_0J2LAuPPn8lZaKGzEtksxMTjynZxuwcQDw3P8N8SCxFdjRgAq1uiZ8PWylxUK1T0QMFeNHnqYe123pa5Uvzx2IvxisFWafq-gTH7uSFP8fgq-lVdku2rsYbSfFofbrITvOL9UJamarOxneZrt5P4NphRi2BCET2ClQRZV_ls6HaLdigmVNsyCTJit1in9TVoj6Pn2NHo0bRWzzPErQK2YUojzuST9GQ2zMUX-CJ6gcjMxVX&t=__TIME__&ni=__IESID__&mo=__OS__&ns=116.25.63.218&m0=__OPENUDID__&m0a=__DUID__&m1=__ANDROIDID1__&m1a=__ANDROIDID__&m2=__IMEI__&m4=__AAID__&m5=__IDFA__&m6=__MAC1__&m6a=__MAC__&nn=__APP__&ur=__URS__&mu=__MURS__&mo1=__OS1__&nws=__NWS__&op=__OP__&o=__LP__&la=__LA__&lo=__LO__&laot=__LAOT__&meid=__MEID__&mcid=__MCID__&ua=__UA__&wp=6fe26mKj1GVvge2qOc3QJfUKau67NFqKWLWqh7S6fA1uGKXDzDKhD0s3mKkrwxKwkpCbCxDvQ6RRfZ7nDUEh3YNs-G0WqVBjW01CnuPqaZeI1RScj6uM-PFc0joKeUiFP1ljxTyi1TAkGACArZzHvNayi7653ohXRLvCDdBiuALKiJ225bYDrOibO_32RbN_PjBimUgqPWIV6EItgayoj0ncz_3hxk7uA24n6p6kXB5GEgql_IowC2ME5t2_7taW3XiKnXE4hBeKhdAew5JBqci7c5jJj3_HiYW5_EhTXSfSVZ66XMxWq9GzOOMZOGXAmFKhBt5s-SqSfpELpwaeFtvSaVq3CmQKSxkrklhQT0g=&ugcId=__UGCID__&ugcType=__UGCTYPE__&m2md5=__IMEIMD5__&m5md5=__IDFAMD5__&deviceId=__DEVICE_ID__&oaid=__OAID__&target=__TARGET__&anchor=__ANCHOR__&work=__WORK__&stageType=__STAGE_TYPE__&playDuration=__PLAY_DURATION__&iyunId=__IYUNID__&muser=__MUSER__&pod=__PODCAST__&podType=__PODTYPE__&ap=__AD_POS__&apc=__AD_POC__&sc=__SOURCE__&so=__MSAS__&owp=__OWP__&ov=__OS_VER__&zz=805398&yy=90000033\",\"monitorType\":\"ytg.inter\",\"videoValidPlayDuration\":null}],\"videoOver\":[{\"url\":\"http://iad.service.163.org/video.gif?ytgReq=A01jAq6qnftIXxMqextbGutF52riQpUFJCAHtOSM99dINJ-WopKzb2CUtwfnpfpgmUCP5IosbrLaW6xaFzAXkPWubHuCi6CrUGRrZ1uj1n6dfkkIJ0LcOT6FrCllWLzHY8im9VhzKZZbbspcCUqj5C5uPO8aUdIjDtWQLyQEz3dvYsMbfWfgDJrcmsT-g7UiVjbw_buE1Q8peR9vqPBZU5VbJFJuuZpPObYhUWk1ZslUox78KNRyDAOcbduS4zopN3VC6l1dzQCp1Iev7JEv6SQr856n04qndAKxOeLagB0J22LyTGShoigEEWfGsvh2GsEiJWYTUzGqHeOX2uErrpbU2Noi8nKT9LyGMMFAriGehKPAAW9hUdDaS1Iz4VI53S_iXaPsLPyvHxzge75_0J2LAuPPn8lZaKGzEtksxMTjynZxuwcQDw3P8N8SCxFdjRgAq1uiZ8PWylxUK1T0QMFeNHnqYe123pa5Uvzx2IvxisFWafq-gTH7uSFP8fgq-lVdku2rsYbSfFofbrITvOL9UJamarOxneZrt5P4NphRi2BCET2ClQRZV_ls6HaLdigmVNsyCTJit1in9TVoj6Pn2NHo0bRWzzPErQK2YUojzuST9GQ2zMUX-CJ6gcjMxVX&t=__TIME__&ni=__IESID__&mo=__OS__&ns=116.25.63.218&m0=__OPENUDID__&m0a=__DUID__&m1=__ANDROIDID1__&m1a=__ANDROIDID__&m2=__IMEI__&m4=__AAID__&m5=__IDFA__&m6=__MAC1__&m6a=__MAC__&nn=__APP__&ur=__URS__&mu=__MURS__&mo1=__OS1__&nws=__NWS__&op=__OP__&o=__LP__&la=__LA__&lo=__LO__&laot=__LAOT__&meid=__MEID__&mcid=__MCID__&ua=__UA__&wp=6fe26mKj1GVvge2qOc3QJfUKau67NFqKWLWqh7S6fA1uGKXDzDKhD0s3mKkrwxKwkpCbCxDvQ6RRfZ7nDUEh3YNs-G0WqVBjW01CnuPqaZeI1RScj6uM-PFc0joKeUiFP1ljxTyi1TAkGACArZzHvNayi7653ohXRLvCDdBiuALKiJ225bYDrOibO_32RbN_PjBimUgqPWIV6EItgayoj0ncz_3hxk7uA24n6p6kXB5GEgql_IowC2ME5t2_7taW3XiKnXE4hBeKhdAew5JBqci7c5jJj3_HiYW5_EhTXSfSVZ66XMxWq9GzOOMZOGXAmFKhBt5s-SqSfpELpwaeFtvSaVq3CmQKSxkrklhQT0g=&ugcId=__UGCID__&ugcType=__UGCTYPE__&m2md5=__IMEIMD5__&m5md5=__IDFAMD5__&deviceId=__DEVICE_ID__&oaid=__OAID__&target=__TARGET__&anchor=__ANCHOR__&work=__WORK__&stageType=__STAGE_TYPE__&playDuration=__PLAY_DURATION__&iyunId=__IYUNID__&muser=__MUSER__&pod=__PODCAST__&podType=__PODTYPE__&ap=__AD_POS__&apc=__AD_POC__&sc=__SOURCE__&so=__MSAS__&owp=__OWP__&ov=__OS_VER__&zz=805398&yy=90000033\",\"monitorType\":\"ytg.inter\",\"videoValidPlayDuration\":null}]},\"monitorConversionMap\":{},\"feedbackInfo\":{\"feedbackEnable\":true,\"title\":\"你觉得这条广告怎么样？\",\"action\":[{\"type\":3,\"text\":\"重复收到相似内容\",\"url\":null},{\"type\":4,\"text\":\"不喜欢该品牌\",\"url\":null},{\"type\":5,\"text\":\"不喜欢网络服务行业类广告\",\"url\":null},{\"type\":6,\"text\":\"不愿看到广告\",\"url\":null},{\"type\":2,\"text\":\"直接关闭\",\"url\":null},{\"type\":1,\"text\":\"我要投诉\",\"url\":\"https://mp.music.163.com/600948c936c13f4d09752e73/commit/index.html?feedbackSource=2400\"}],\"loadingSkipAction\":null,\"adInfo\":{\"adId\":\"682335\",\"industryId\":\"25\",\"sponsorGroupId\":\"127503\",\"customerId\":null}},\"incentiveInfo\":null,\"generalRightsInfo\":null,\"incentiveMode\":null,\"bannerContextMonitor\":null,\"universalLinkType\":0,\"scheme\":\"kuaikan\",\"appName\":null,\"adVideoShowTime\":null,\"ctaLandingStrategy\":2,\"ctaLandingGapTime\":null}",
      "encodeId": "8993816772047616551",
      "program": null,
      "event": null,
      "video": null,
      "song": null,
      "scm": "",
      "bannerBizType": "ad_banner"
    },
    {
      "imageUrl": "http://p1.music.126.net/A2pBai1QxgGhHh7Y-joGrA==/109951169813423810.jpg",
      "targetId": 2608458865,
      "adid": null,
      "targetType": 1,
      "titleColor": "red",
      "typeTitle": "新歌首发",
      "url": null,
      "exclusive": false,
      "monitorImpress": null,
      "monitorClick": null,
      "monitorType": null,
      "monitorImpressList": null,
      "monitorClickList": null,
      "monitorBlackList": null,
      "extMonitor": null,
      "extMonitorInfo": null,
      "adSource": null,
      "adLocation": null,
      "adDispatchJson": null,
      "encodeId": "2608458865",
      "program": null,
      "event": null,
      "video": null,
      "song": null,
      "scm": "1.music-homepage.homepage_banner_force.banner.14890964.786499149.null",
      "bannerBizType": "force_banner"
    },
    {
      "imageUrl": "http://p1.music.126.net/TrFqtB3EF7o7MsDRYXx0AA==/109951169813429724.jpg",
      "targetId": 2609736328,
      "adid": null,
      "targetType": 1,
      "titleColor": "red",
      "typeTitle": "热歌推荐",
      "url": null,
      "exclusive": false,
      "monitorImpress": null,
      "monitorClick": null,
      "monitorType": null,
      "monitorImpressList": null,
      "monitorClickList": null,
      "monitorBlackList": null,
      "extMonitor": null,
      "extMonitorInfo": null,
      "adSource": null,
      "adLocation": null,
      "adDispatchJson": null,
      "encodeId": "2609736328",
      "program": null,
      "event": null,
      "video": null,
      "song": null,
      "scm": "1.music-homepage.homepage_banner_force.banner.14890965.786440532.null",
      "bannerBizType": "force_banner"
    },
    {
      "imageUrl": "http://p1.music.126.net/lb5gph8l1Vha33ox6dXeig==/109951169813441181.jpg",
      "targetId": 2609468491,
      "adid": null,
      "targetType": 1,
      "titleColor": "red",
      "typeTitle": "新歌首发",
      "url": null,
      "exclusive": false,
      "monitorImpress": null,
      "monitorClick": null,
      "monitorType": null,
      "monitorImpressList": null,
      "monitorClickList": null,
      "monitorBlackList": null,
      "extMonitor": null,
      "extMonitorInfo": null,
      "adSource": null,
      "adLocation": null,
      "adDispatchJson": null,
      "encodeId": "2609468491",
      "program": null,
      "event": null,
      "video": null,
      "song": null,
      "scm": "1.music-homepage.homepage_banner_force.banner.14890966.786610655.null",
      "bannerBizType": "force_banner"
    },
    {
      "imageUrl": "http://iadmusicmat.music.126.net/eb719e15649b472bb0e7fc281ec1f134.jpg",
      "targetId": 3796806003440653000,
      "adid": "3796806003440652867",
      "targetType": 3000,
      "titleColor": "blue",
      "typeTitle": "广告",
      "url": "6474233312",
      "exclusive": false,
      "monitorImpress": "",
      "monitorClick": "",
      "monitorType": null,
      "monitorImpressList": [],
      "monitorClickList": [],
      "monitorBlackList": null,
      "extMonitor": [
        {
          "monitorImpress": "http://iad.service.163.org/adx/me.gif?adx_req=kH7uOvNsjDO6SpIu4KBC386CYvTURVYI2oswFmA5SlziMYyHYf0n--BT4HomKVSmIE6q2S2o_EQ2HubUT-bVn3klkn-xCi9WUp3xx1mkCC02J8JPa3i_lUBTmZFJ-Y4ZgHDD4iTIdZL2ozVJtM7g2jlCgGSBDQtM5jl_ov2ts8jX0W-eKRaBR1oyrQvgsj9aNDvKKAQzaPUk1iwxg-dR9_QptUZmhcLpmBDU7xWySYqtC5KhVbGC2d-3PH0MsogPBQbgL8irO8NaAjDvHcIdVzXruXTu4E8uDEjiAzm2DkOM9_4t7h0xYbg9z0EkaOn_hcbZ49kVlseFXZQv7YDreszxITfH5_wcGMiYxDfiRGCbnoJicu8B3y4rKgjM0WsDN533zasNHfIXE5dOKkEX2Ob8AEx6tVKq7t2ULhAh4yOSoDIbq3hstwCFMeXm5x2oeNNz7tNHXRYIkROKYQOKxy2JpbinqMWScfyBgQc0CwSXglss4VEUxlrGF3m7rssxVTfYz0RJysJgAsW0UlMzoMh3k0c15Ru8at79XCLW1Qh-HF9W71tWtKvB2ZOABRS42MP_liTzMUwFPcb2VICW7urdrDOiiRwUnDojFcQ9tsBhTB-UUC4cO_c7qIAqMEJLIIvBxk3yHLFekxozaoli6BoLBnt-_Ln4rKaDyHXL9nSUJbVoprTtyAb8ZASwwmINhj9lJzhcmOSHTMTs_eE5FA&dsp=10001&zz=855763&yy=1000003607&pp=&t=__TIME__&ni=__IESID__&mo=__OS__&ns=116.25.63.218&m0=__OPENUDID__&m0a=__DUID__&m1=__ANDROIDID1__&m1a=__ANDROIDID__&m2=__IMEI__&m4=__AAID__&m5=__IDFA__&m6=__MAC1__&m6a=__MAC__&nn=__APP__&ur=__URS__&mu=__MURS__&mo1=__OS1__&nws=__NWS__&op=__OP__&la=__LA__&lo=__LO__&laot=__LAOT__&meid=__MEID__&mcid=__MCID__&act=__ACT__&ua=__UA__&ugcId=__UGCID__&ugcType=__UGCTYPE__&m2md5=__IMEIMD5__&m5md5=__IDFAMD5__&deviceId=__DEVICE_ID__&oaid=__OAID__&target=__TARGET__&av=__APPVER__&anchor=__ANCHOR__&work=__WORK__&ivc_s=0&iyunId=__IYUNID__&muser=__MUSER__&pod=__PODCAST__&podType=__PODTYPE__&ap=__AD_POS__&apc=__AD_POC__&sc=__SOURCE__&so=__MSAS__&owp=__OWP__&ct=__CT__&as=__AS__&ic=__IC__&ds=__DEVICE_STRATEGY__&brt=&nsp=__NS__&ov=__OS_VER__&pi=__PRE_INS__&mt=__MACHINE_TYPE__&ivc_f=__IVC_F__&ivc_a=__IVC_A__&tfs=__TFS__&aefe=__AEFE__&aect=__AECT__&dp_app=__DP_APP__&is_ins=__IS_INS__&url=__URL__&con_info=__CONTEXT_INFO__&sos=__SOS__&sov=__SOS_VER__",
          "monitorClick": "http://iad.service.163.org/adx/mc.gif?adx_req=kH7uOvNsjDO6SpIu4KBC386CYvTURVYI2oswFmA5SlziMYyHYf0n--BT4HomKVSmIE6q2S2o_EQ2HubUT-bVn3klkn-xCi9WUp3xx1mkCC02J8JPa3i_lUBTmZFJ-Y4ZgHDD4iTIdZL2ozVJtM7g2jlCgGSBDQtM5jl_ov2ts8jX0W-eKRaBR1oyrQvgsj9aNDvKKAQzaPUk1iwxg-dR9_QptUZmhcLpmBDU7xWySYqtC5KhVbGC2d-3PH0MsogPBQbgL8irO8NaAjDvHcIdVzXruXTu4E8uDEjiAzm2DkOM9_4t7h0xYbg9z0EkaOn_hcbZ49kVlseFXZQv7YDreszxITfH5_wcGMiYxDfiRGCbnoJicu8B3y4rKgjM0WsDN533zasNHfIXE5dOKkEX2Ob8AEx6tVKq7t2ULhAh4yOSoDIbq3hstwCFMeXm5x2oeNNz7tNHXRYIkROKYQOKxy2JpbinqMWScfyBgQc0CwSXglss4VEUxlrGF3m7rssxVTfYz0RJysJgAsW0UlMzoMh3k0c15Ru8at79XCLW1Qh-HF9W71tWtKvB2ZOABRS42MP_liTzMUwFPcb2VICW7urdrDOiiRwUnDojFcQ9tsBhTB-UUC4cO_c7qIAqMEJLIIvBxk3yHLFekxozaoli6BoLBnt-_Ln4rKaDyHXL9nSUJbVoprTtyAb8ZASwwmINhj9lJzhcmOSHTMTs_eE5FA&dsp=10001&zz=855763&yy=1000003607&pp=&t=__TIME__&ni=__IESID__&mo=__OS__&ns=116.25.63.218&m0=__OPENUDID__&m0a=__DUID__&m1=__ANDROIDID1__&m1a=__ANDROIDID__&m2=__IMEI__&m4=__AAID__&m5=__IDFA__&m6=__MAC1__&m6a=__MAC__&nn=__APP__&ur=__URS__&mu=__MURS__&mo1=__OS1__&nws=__NWS__&op=__OP__&la=__LA__&lo=__LO__&laot=__LAOT__&meid=__MEID__&mcid=__MCID__&act=__ACT__&ua=__UA__&ugcId=__UGCID__&ugcType=__UGCTYPE__&m2md5=__IMEIMD5__&m5md5=__IDFAMD5__&deviceId=__DEVICE_ID__&oaid=__OAID__&target=__TARGET__&av=__APPVER__&anchor=__ANCHOR__&work=__WORK__&ivc_s=0&iyunId=__IYUNID__&muser=__MUSER__&pod=__PODCAST__&podType=__PODTYPE__&ap=__AD_POS__&apc=__AD_POC__&sc=__SOURCE__&so=__MSAS__&owp=__OWP__&ct=__CT__&as=__AS__&ic=__IC__&ds=__DEVICE_STRATEGY__&brt=&nsp=__NS__&ov=__OS_VER__&pi=__PRE_INS__&mt=__MACHINE_TYPE__&ivc_f=__IVC_F__&ivc_a=__IVC_A__&tfs=__TFS__&aefe=__AEFE__&aect=__AECT__&dp_app=__DP_APP__&is_ins=__IS_INS__&url=__URL__&con_info=__CONTEXT_INFO__&sos=__SOS__&sov=__SOS_VER__",
          "monitorType": "adx.inter",
          "monitorConversion": null
        },
        {
          "monitorImpress": "https://volctrack.com/datatracer/ad_track/tracking?promotion_channel_id=wangyiyun&action_type=click&tracking_id=TR_FIvr9XS1&campaign_id=884004&ad_id=719478&ad_name=__ADNAME__&creative_id=750901&account_id=210107689&idfa=__IDFA__&imei=__IMEI__&androidid=__ANDROIDID__&mac_upper_nocolon_md5=__MAC__&mac_md5=__MAC1__&os_code=__OS__&ua=__UA__&timestamp_ms=__CLICKTIME__&ip=116.25.63.218&os_version=__OSVER__&callback_param=ASEwXJYB-gH6AQ.ad3e81b6c18a840e284da1cd538574191BhAdHh8gITQ-P0wiuuTw2R4raCrJaFkfbeLHWyNq_TSp7vAx7R0pPMD1r34ggKEDOYSpxKrAq0B7QLtD-8CjwyxCtIIkwm0C9UKlgHWAVq6Ep4InxLfCwwAOCAoQMxQjOEI8M0giTCdUKlgHWAZgCmAZa3QWeCJ8S3wvmEuYCpxKrAqwPrQHtAu0P7wKxCrIM8gK0C7cR-QG6ErsPvRH-Eb8Q&idfa_upper_md5=__IDFAMD5__&imei_md5=__IMEIMD5__&oaid=__OAID__&oaid_md5=__OAIDMD5__&caid=__YAID__",
          "monitorClick": "https://volctrack.com/datatracer/ad_track/tracking?promotion_channel_id=wangyiyun&action_type=click&tracking_id=TR_FIvr9XS1&campaign_id=884004&ad_id=719478&ad_name=__ADNAME__&creative_id=750901&account_id=210107689&idfa=__IDFA__&imei=__IMEI__&androidid=__ANDROIDID__&mac_upper_nocolon_md5=__MAC__&mac_md5=__MAC1__&os_code=__OS__&ua=__UA__&timestamp_ms=__CLICKTIME__&ip=116.25.63.218&os_version=__OSVER__&callback_param=ASEwXJYB-gH6AQ.ad3e81b6c18a840e284da1cd538574191BhAdHh8gITQ-P0wiuuTw2R4raCrJaFkfbeLHWyNq_TSp7vAx7R0pPMD1r34ggKEDOYSpxKrAq0B7QLtD-8CjwyxCtIIkwm0C9UKlgHWAVq6Ep4InxLfCwwAOCAoQMxQjOEI8M0giTCdUKlgHWAZgCmAZa3QWeCJ8S3wvmEuYCpxKrAqwPrQHtAu0P7wKxCrIM8gK0C7cR-QG6ErsPvRH-Eb8Q&idfa_upper_md5=__IDFAMD5__&imei_md5=__IMEIMD5__&oaid=__OAID__&oaid_md5=__OAIDMD5__&caid=__YAID__",
          "monitorType": "volctrack.comexter",
          "monitorConversion": null
        },
        {
          "monitorImpress": "http://iad.service.163.org/me.gif?ytgReq=A01uiQeoSCp3xPHj4qvG9noIT2_coT6A0_xdlL0oY0TKXWnkTx04F7catMLjA_q0fVMDnr6iS11RsBmNCTGH2DAS_xgtfM0OkpfFMTXjZZmU_AlxNQO_6VFTtt279DniHsjTVAczQ4jGPk3lVwYVWPVVk_reChT7zJE3xvE4mfw6LpOc6UqrcGPaGnH1kStIrCgtXTBUKfcHrjanBM_M2vW4aby6xGewIvHJLN2CMHQNA-UC2UTKKQ6uLmthSq_iZjo4bO6Ov2dGV5F_JCOxjd2L434skf52P1hRv1CD1iebgilIl-YT5OhRmurDS3OnVuxRQidP9xhtogoCB4gL4gzBuq9VcF7OhQRv3oHmM7FG3WtaPp2rGCkgDXgzA6v-P52B-gt9RPA9dCwBmf_DnkQhDs7qASrSepxLAIBn7Tk54BH-SqYEyxeNYiRXDMpDy_z6pj4SksSqnRXIzlwxJT167D6LKObg8w-RaCYY82meQ10ud7vJ_-wu1plhOKgp3pGaRM7mv-UGNOMBCThTXXOBfd--DYc6C2lPV_ulDA0q7RJ1IbEgbeEb6gDUlLXXXCY8AREP4DGdr4J1MsUccgP7Q&t=__TIME__&ni=__IESID__&mo=__OS__&ns=116.25.63.218&m0=__OPENUDID__&m0a=__DUID__&m1=__ANDROIDID1__&m1a=__ANDROIDID__&m2=__IMEI__&m4=__AAID__&m5=__IDFA__&m6=__MAC1__&m6a=__MAC__&nn=__APP__&ur=__URS__&mu=__MURS__&mo1=__OS1__&nws=__NWS__&op=__OP__&o=__LP__&la=__LA__&lo=__LO__&laot=__LAOT__&meid=__MEID__&mcid=__MCID__&ua=__UA__&wp=aBWV_aEgvNwZxNctq-OttbdP6ySisReRZiHUnXa-P0JXieuk0uyAWQX2J3Vy856hqPYUqu0-lQJ0qySDeez0FYNs-G0WqVBjW01CnuPqaZcndbCGKGv8jWGrqX7O6ASFo3wKc2kGUfVUpV1Q2bU0PgA9vZ1LkseHZTb0ax_RKEV1rGPF2dpto5andvnEFdVsV1fMeDetJOKBtrpBZBLnBGBD24GemFEfo-Nr3QGpsSHSesw49Fm9IhsfeJMp7wRk7bFkmST01d9qU8oXR4KA-v8Lp9bQW-KN5BBiy-xFoTtEjvqpmQdeMYHk69yUZXOQmFKhBt5s-SqSfpELpwaeFtvSaVq3CmQKSxkrklhQT0g=&ugcId=__UGCID__&ugcType=__UGCTYPE__&m2md5=__IMEIMD5__&m5md5=__IDFAMD5__&deviceId=__DEVICE_ID__&oaid=__OAID__&target=__TARGET__&anchor=__ANCHOR__&work=__WORK__&ivc_s=0&iyunId=__IYUNID__&muser=__MUSER__&pod=__PODCAST__&podType=__PODTYPE__&ap=__AD_POS__&apc=__AD_POC__&sc=__SOURCE__&so=__MSAS__&owp=__OWP__&ct=__CT__&as=__AS__&pi=__PRE_INS__&mt=__MACHINE_TYPE__&ivc_f=__IVC_F__&ivc_a=__IVC_A__&con_info=__CONTEXT_INFO__&ov=__OS_VER__&ext=__EXT__&zz=855763&yy=1000003607",
          "monitorClick": "http://iad.service.163.org/mc.gif?ytgReq=A01uiQeoSCp3xPHj4qvG9noIT2_coT6A0_xdlL0oY0TKXWnkTx04F7catMLjA_q0fVMDnr6iS11RsBmNCTGH2DAS_xgtfM0OkpfFMTXjZZmU_AlxNQO_6VFTtt279DniHsjTVAczQ4jGPk3lVwYVWPVVk_reChT7zJE3xvE4mfw6LpOc6UqrcGPaGnH1kStIrCgtXTBUKfcHrjanBM_M2vW4aby6xGewIvHJLN2CMHQNA-UC2UTKKQ6uLmthSq_iZjo4bO6Ov2dGV5F_JCOxjd2L434skf52P1hRv1CD1iebgilIl-YT5OhRmurDS3OnVuxRQidP9xhtogoCB4gL4gzBuq9VcF7OhQRv3oHmM7FG3WtaPp2rGCkgDXgzA6v-P52B-gt9RPA9dCwBmf_DnkQhDs7qASrSepxLAIBn7Tk54BH-SqYEyxeNYiRXDMpDy_z6pj4SksSqnRXIzlwxJT167D6LKObg8w-RaCYY82meQ10ud7vJ_-wu1plhOKgp3pGaRM7mv-UGNOMBCThTXXOBfd--DYc6C2lPV_ulDA0q7RJ1IbEgbeEb6gDUlLXXXCY8AREP4DGdr4J1MsUccgP7Q&t=__TIME__&ni=__IESID__&mo=__OS__&ns=116.25.63.218&m0=__OPENUDID__&m0a=__DUID__&m1=__ANDROIDID1__&m1a=__ANDROIDID__&m2=__IMEI__&m4=__AAID__&m5=__IDFA__&m6=__MAC1__&m6a=__MAC__&nn=__APP__&ur=__URS__&mu=__MURS__&mo1=__OS1__&nws=__NWS__&op=__OP__&o=__LP__&la=__LA__&lo=__LO__&laot=__LAOT__&meid=__MEID__&mcid=__MCID__&ua=__UA__&wp=aBWV_aEgvNwZxNctq-OttbdP6ySisReRZiHUnXa-P0JXieuk0uyAWQX2J3Vy856hqPYUqu0-lQJ0qySDeez0FYNs-G0WqVBjW01CnuPqaZcndbCGKGv8jWGrqX7O6ASFo3wKc2kGUfVUpV1Q2bU0PgA9vZ1LkseHZTb0ax_RKEV1rGPF2dpto5andvnEFdVsV1fMeDetJOKBtrpBZBLnBGBD24GemFEfo-Nr3QGpsSHSesw49Fm9IhsfeJMp7wRk7bFkmST01d9qU8oXR4KA-v8Lp9bQW-KN5BBiy-xFoTtEjvqpmQdeMYHk69yUZXOQmFKhBt5s-SqSfpELpwaeFtvSaVq3CmQKSxkrklhQT0g=&ugcId=__UGCID__&ugcType=__UGCTYPE__&m2md5=__IMEIMD5__&m5md5=__IDFAMD5__&deviceId=__DEVICE_ID__&oaid=__OAID__&target=__TARGET__&anchor=__ANCHOR__&work=__WORK__&ivc_s=0&iyunId=__IYUNID__&muser=__MUSER__&pod=__PODCAST__&podType=__PODTYPE__&ap=__AD_POS__&apc=__AD_POC__&sc=__SOURCE__&so=__MSAS__&owp=__OWP__&ct=__CT__&as=__AS__&pi=__PRE_INS__&mt=__MACHINE_TYPE__&ivc_f=__IVC_F__&ivc_a=__IVC_A__&con_info=__CONTEXT_INFO__&ov=__OS_VER__&ext=__EXT__&zz=855763&yy=1000003607",
          "monitorType": "ytg.inter",
          "monitorConversion": null
        }
      ],
      "extMonitorInfo": {
        "aliAdId": "",
        "reqId": "adx_req=kH7uOvNsjDO6SpIu4KBC386CYvTURVYI2oswFmA5SlziMYyHYf0n--BT4HomKVSmIE6q2S2o_EQ2HubUT-bVn3klkn-xCi9WUp3xx1mkCC02J8JPa3i_lUBTmZFJ-Y4ZgHDD4iTIdZL2ozVJtM7g2jlCgGSBDQtM5jl_ov2ts8jX0W-eKRaBR1oyrQvgsj9aNDvKKAQzaPUk1iwxg-dR9_QptUZmhcLpmBDU7xWySYqtC5KhVbGC2d-3PH0MsogPBQbgL8irO8NaAjDvHcIdVzXruXTu4E8uDEjiAzm2DkOM9_4t7h0xYbg9z0EkaOn_hcbZ49kVlseFXZQv7YDreszxITfH5_wcGMiYxDfiRGCbnoJicu8B3y4rKgjM0WsDN533zasNHfIXE5dOKkEX2Ob8AEx6tVKq7t2ULhAh4yOSoDIbq3hstwCFMeXm5x2oeNNz7tNHXRYIkROKYQOKxy2JpbinqMWScfyBgQc0CwSXglss4VEUxlrGF3m7rssxVTfYz0RJysJgAsW0UlMzoMh3k0c15Ru8at79XCLW1Qh-HF9W71tWtKvB2ZOABRS42MP_liTzMUwFPcb2VICW7urdrDOiiRwUnDojFcQ9tsBhTB-UUC4cO_c7qIAqMEJLIIvBxk3yHLFekxozaoli6BoLBnt-_Ln4rKaDyHXL9nSUJbVoprTtyAb8ZASwwmINhj9lJzhcmOSHTMTs_eE5FA",
        "requestid": "",
        "orderId": "",
        "ad_type": "",
        "dspId": "10001",
        "price": "",
        "refer": "",
        "needClickPosInfo": false,
        "mode": "",
        "scm": "",
        "spm": "",
        "displayMd5Sign": "",
        "monitorType": "1"
      },
      "adSource": "1",
      "adLocation": "10008",
      "adDispatchJson": "{\"sourceType\":0,\"pkgName\":\"\",\"productType\":201,\"androidAppInfo\":{\"pkgName\":\"\",\"md5\":\"\",\"size\":0,\"productName\":\"\",\"version\":\"\",\"developer\":null,\"permissionDescUrl\":null,\"privacyPolicyUrl\":null,\"appUpdateTime\":null},\"monitorConversionList\":[],\"adMaterial\":{\"nativeResource\":null,\"picList\":[],\"videoList\":[],\"audioList\":[],\"minorVideoList\":[],\"videoAutoPlayWithoutWifi\":false,\"easyPlayable\":null},\"linkingUseNewMaterial\":{\"nativeResource\":null,\"picList\":[],\"videoList\":[],\"audioList\":[],\"minorVideoList\":[],\"videoAutoPlayWithoutWifi\":false,\"easyPlayable\":null},\"adSponsor\":{\"userId\":543485413,\"nickname\":\"云村供销社\",\"avatar\":\"http://p1.music.126.net/dbBEeD0nzNxbshkUmKzYPQ==/18981968742398132.jpg?param=180y180\",\"userType\":0,\"authStatus\":0},\"creativeType\":1,\"pattern\":\"1\",\"adContentText\":\"\",\"showTime\":0.0,\"contextInfo\":{\"material_id\":\"855763\",\"req_id\":\"d3e81b6c18a840e284da1cd538574191\",\"dsp_id\":\"10001\",\"tag_id\":\"1000003607\",\"deal_id\":null,\"creative_id\":\"750901\",\"related_deal_id\":null,\"related_material_id\":null,\"invocation_style\":null,\"native_id\":\"2011201\",\"startup_type\":null,\"api_type\":3,\"adx_alg\":\"{\\\"user_factor_total\\\":1.0,\\\"win_by_factor\\\":0}\",\"sponsor_id\":null,\"request_source\":null,\"monitor_touch_type\":1,\"vip_payment_type\":1},\"invocationStyleInfo\":{\"invocationStyle\":0,\"invocationIcon\":null,\"invocationStyleContent\":null,\"slideDistance\":null,\"activeBeginTime\":0,\"activeEndTime\":999,\"iconShowBeginTime\":null,\"iconShowEndTime\":null},\"c2sVideoActionMonitor\":{\"videoPlay\":null,\"videoAutoPlay\":null,\"videoValidPlay\":null,\"videoBreak\":null,\"videoOver\":null},\"s2sVideoActionMonitor\":{\"videoPlay\":null,\"videoAutoPlay\":null,\"videoValidPlay\":null,\"videoBreak\":null,\"videoOver\":null},\"monitorConversionMap\":{},\"feedbackInfo\":{\"feedbackEnable\":true,\"title\":\"你觉得这条广告怎么样？\",\"action\":[{\"type\":3,\"text\":\"重复收到相似内容\",\"url\":null},{\"type\":4,\"text\":\"不喜欢该品牌\",\"url\":null},{\"type\":5,\"text\":\"不喜欢网络服务行业类广告\",\"url\":null},{\"type\":6,\"text\":\"不愿看到广告\",\"url\":null},{\"type\":2,\"text\":\"直接关闭\",\"url\":null},{\"type\":1,\"text\":\"我要投诉\",\"url\":\"https://mp.music.163.com/600948c936c13f4d09752e73/commit/index.html?feedbackSource=2400\"}],\"loadingSkipAction\":null,\"adInfo\":{\"adId\":\"719478\",\"industryId\":\"25\",\"sponsorGroupId\":\"389502\",\"customerId\":null}},\"incentiveInfo\":null,\"generalRightsInfo\":null,\"incentiveMode\":null,\"bannerContextMonitor\":null,\"universalLinkType\":0,\"scheme\":null,\"appName\":null,\"adVideoShowTime\":null,\"ctaLandingStrategy\":2,\"ctaLandingGapTime\":null}",
      "encodeId": "3796806003440652867",
      "program": null,
      "event": null,
      "video": null,
      "song": null,
      "scm": "",
      "bannerBizType": "ad_banner"
    },
    {
      "imageUrl": "http://p1.music.126.net/zv9HLjE3RKuBKwHm6fcfVg==/109951169813442439.jpg",
      "targetId": 2608471890,
      "adid": null,
      "targetType": 1,
      "titleColor": "red",
      "typeTitle": "新歌首发",
      "url": null,
      "exclusive": false,
      "monitorImpress": null,
      "monitorClick": null,
      "monitorType": null,
      "monitorImpressList": null,
      "monitorClickList": null,
      "monitorBlackList": null,
      "extMonitor": null,
      "extMonitorInfo": null,
      "adSource": null,
      "adLocation": null,
      "adDispatchJson": null,
      "encodeId": "2608471890",
      "program": null,
      "event": null,
      "video": null,
      "song": null,
      "scm": "1.music-homepage.homepage_banner_force.banner.14890968.786406866.null",
      "bannerBizType": "force_banner"
    },
    {
      "imageUrl": "http://p1.music.126.net/dFo0koyr5dMthzSiF-ICog==/109951169813459660.jpg",
      "targetId": 2608448649,
      "adid": null,
      "targetType": 1,
      "titleColor": "red",
      "typeTitle": "新歌首发",
      "url": null,
      "exclusive": false,
      "monitorImpress": null,
      "monitorClick": null,
      "monitorType": null,
      "monitorImpressList": null,
      "monitorClickList": null,
      "monitorBlackList": null,
      "extMonitor": null,
      "extMonitorInfo": null,
      "adSource": null,
      "adLocation": null,
      "adDispatchJson": null,
      "encodeId": "2608448649",
      "program": null,
      "event": null,
      "video": null,
      "song": null,
      "scm": "1.music-homepage.homepage_banner_force.banner.14890970.786381199.null",
      "bannerBizType": "force_banner"
    }
  ]
}
//await banner({ type: 0 })

const container = ref<HTMLDivElement>()
const width = ref(700)
const height = ref(250)
const inverseScaling = ref(150)
const space = ref(200)

//TODO: resize change the width and height 
const { createResizeObserver } = useObserver()
onMounted(() => {
  createResizeObserver(container.value!, async ([entry]) => {
    const [size] = entry.borderBoxSize || []
    width.value = size.inlineSize / 10 * 6
    height.value = width.value / 4
    inverseScaling.value = width.value / height.value * 1.5
    space.value = width.value / 2
  })
})
</script>