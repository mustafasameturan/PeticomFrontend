import React from 'react'
import "../../../assets/css/homeaccordion.css"

const FAQ = () => {


    return(
        <div className='container flex justify-center mx-auto'>
            <main className="faq">
        
                <div className="faq__holder">
                    <h1 className="faq__heading">Sıkça Sorulan Sorular</h1>
            
                        <details className="faq__detail">
                            <summary  className="faq__summary"><span className="faq__question">Evcil hayvanım için uygun bir peticomer nasıl bulurum?</span></summary>
                            <p className="faq__text">Peticom, uygun bir evcil hayvan barındırıcısı bulmanıza yardımcı olmak için konum, evcil hayvan türü ve müsaitlik durumu gibi 
                            arama filtreleri sağlar. Mevcut listelere göz atabilir ve evcil hayvanınızın özel ihtiyaçlarını görüşmek için Peticomer’lar ile iletişime geçebilirsiniz.</p>
                        </details>
                    
                        <details className="faq__detail">
                        <summary  className="faq__summary"><span className="faq__question">Nasıl Peticomer olunur?</span></summary>
                        <p className="faq__text">Web sitemize üye olduktan sonra kullanıcı ayarları kısmından Peticomer olamk için başvuruda bulunabilirsiniz. Başvrun arayalım!</p>
                        </details>  

                        <details className="faq__detail">
                        <summary  className="faq__summary"><span className="faq__question">Peticomer nasıl doğrulanır ve güvenilir?</span></summary>
                        <p className="faq__text">Web sitesinde, Peticomer olmak için yazılan başvuru metni, önceki müşterilerden gelen yıldızlar ve adres doğruluğunu inceleyecek bir süreç oluyor. 
                        Güvenilirliğini değerlendirmek için ev sahibinin profilini, puanlarını, rozetlerini, ve yaptığı işleri inceleyebilirsiniz.</p>
                        </details>  
                    
                        <details className="faq__detail">
                        <summary  className="faq__summary"><span className="faq__question">Acil bir durum olursa veya evcil hayvanım kaldığı süre boyunca veteriner bakımına ihtiyaç duyarsa ne olur?</span></summary>
                        <p className="faq__text">Acil durumlar ve veteriner bakımı ile ilgili olarak evcil hayvan sahibi ile iletişim kurmak önemlidir. Yürürlükteki protokolleri tartışın 
                        ve kendiniz ve veterineriniz için acil durum iletişim bilgilerini sağlayın.</p>
                        {/* <p className="faq__text">A reset link will be emailed to you.</p> */}
                        </details>  
                        
                        <details className="faq__detail">
                        <summary  className="faq__summary"><span className="faq__question">Ödeme ve iade işlemleri nasıl yapılır?</span></summary>
                        <p className="faq__text">Peticom olarak En popüler ödeme yöntemlerinden biri olan Iyzico’yu kullanıyoruz. 7/24 canlı destek sağlanıyor ve ekstra para kesilmiyor. Dünya çapında kolay ödeme yapılmasını sağlar. 
                        Banka kartı veya kredi kartı kullanmak istemeyen kişiler için sanal cüzdan hizmeti sunuluyor.</p>
                        </details> 
                        
                        <details className="faq__detail">
                        <summary  className="faq__summary"><span className="faq__question">Evcil hayvanımı peticomer’e bırakırken ne getirmeliyim?</span></summary>
                        <p className="faq__text">Genellikle evcil hayvanınızın mamasını, ilaçlarını (varsa), en sevdiği oyuncakları ve ev sahibinin ihtiyaç duyabileceği 
                        özel bakım talimatlarını veya tıbbi kayıtları getirmeniz önerilir.</p>
                        </details>  

                        <details className="faq__detail">
                        <summary  className="faq__summary"><span className="faq__question">Hangi tür evcil hayvanlar için bakım hizmeti sunuyorsunuz?</span></summary>
                        <p className="faq__text">Peticomerler'in bakabileceği ecvil hayvanlar Kedi ve Köpektir.</p>
                        </details> 
            
                </div>
            </main> 
        
      
        </div>
    )
}

export default FAQ