const freezeLibrary = value => {
    if (value && typeof value === 'object' && !Object.isFrozen(value)) {
        Object.values(value).forEach(freezeLibrary);
        Object.freeze(value);
    }
    return value;
};

export const libraryOverview = freezeLibrary({
    value: '6.000+ vụ việc',
    detail: 'Bộ Công an cho biết lừa đảo trực tuyến tại Việt Nam gây thiệt hại hơn 12.000 tỷ đồng trong năm 2024.',
    source: {
        publisher: 'Bộ Công an',
        publishedAt: '25/10/2025',
        title: 'Tăng cường hợp tác quốc tế trong phòng, chống tội phạm lừa đảo trực tuyến',
        url: 'https://bocongan.gov.vn/bai-viet/tang-cuong-hop-tac-quoc-te-trong-phong-chong-toi-pham-lua-dao-truc-tuyen-1761383230'
    },
    reviewedAt: '23/07/2026'
});

export const scamLibrary = freezeLibrary([
    {
        id: 'bank-lock',
        group: 'Ngân hàng',
        title: 'Tin “giao dịch lạ” ép bấm link',
        channel: 'SMS · Website giả',
        hook: 'Đánh vào nỗi sợ mất tiền',
        summary: 'Kẻ gian dựng một giao dịch bác không thực hiện rồi cho rất ít thời gian để “hủy”.',
        scenario: '08:17, bác đang chuẩn bị đi làm. Một SMS có cách trình bày giống thông báo ngân hàng xuất hiện trên điện thoại.',
        example: [
            {
                speaker: 'NGANHANG-ALERT',
                time: '08:17',
                text: 'Giao dịch 12.500.000đ tại POS #HANOI đang chờ xử lý. Nếu không phải quý khách, hủy trước 08:27 tại https://xac-minh-gd.example'
            },
            {
                speaker: 'Trang “hủy giao dịch”',
                time: '08:19',
                text: 'Nhập tên đăng nhập, mật khẩu và mã OTP vừa nhận để hoàn tất hủy giao dịch.'
            }
        ],
        signs: [
            'Tin nhắn tự đưa đường link và đặt thời hạn chỉ 10 phút.',
            'Trang “hủy” lại đòi cả mật khẩu lẫn OTP — đủ dữ liệu để chiếm tài khoản.',
            'Tên miền nhìn giống ngân hàng nhưng không phải địa chỉ chính thức.'
        ],
        action: [
            'Không bấm link; tự mở ứng dụng ngân hàng đã cài để kiểm tra biến động.',
            'Gọi số in ở mặt sau thẻ nếu vẫn còn nghi ngờ.',
            'Nếu đã nhập thông tin, khóa ngân hàng số và báo ngân hàng ngay.'
        ],
        evidence: {
            fact: 'Bộ Công an từng nêu chính kiểu tin giả “giao dịch 12.500.000 VND tại POS #HANOI” dẫn tới trang lấy mật khẩu hoặc cài mã độc.',
            publisher: 'Cục Cảnh sát hình sự · Bộ Công an',
            publishedAt: '16/09/2025',
            title: 'Cảnh báo lừa đảo lợi dụng sự cố an ninh mạng tại CIC',
            url: 'https://bocongan.gov.vn/bai-viet/canh-bao-lua-dao-chiem-doat-tai-san-tu-su-co-an-ninh-mang-tai-trung-tam-thong-tin-tin-dung-quoc-gia-cic-1757991790'
        }
    },
    {
        id: 'bank-transfer',
        group: 'Ngân hàng',
        title: '“Tài khoản an toàn” để giữ tiền',
        channel: 'Cuộc gọi · Zalo',
        hook: 'Dọa tiền sắp bị rút sạch',
        summary: 'Người gọi tự xưng bộ phận chống gian lận, yêu cầu chuyển toàn bộ tiền sang một tài khoản “tạm giữ”.',
        scenario: '16:05, một người gọi đúng họ tên của bác và nói tài khoản vừa bị gắn với hồ sơ vay lạ.',
        example: [
            {
                speaker: '“Trung tâm chống gian lận”',
                time: '16:05',
                text: 'Bác không xử lý trong hôm nay thì toàn bộ tiền có thể bị phong tỏa. Tôi đang phối hợp Công an để bảo vệ tài khoản cho bác.'
            },
            {
                speaker: 'Zalo “Hỗ trợ 24/7”',
                time: '16:12',
                text: 'Bác chuyển 300.000.000đ sang tài khoản an toàn 10••••••06, chủ tài khoản V.T.K. Xác minh xong hệ thống hoàn lại ngay.'
            }
        ],
        signs: [
            'Ngân hàng không bảo vệ tiền bằng cách bảo khách chuyển sang tài khoản cá nhân khác.',
            'Biết họ tên hoặc một phần thông tin không chứng minh người gọi là nhân viên thật.',
            'Kẻ gian thường giữ máy liên tục để bác không kịp gọi người thân hay ngân hàng.'
        ],
        action: [
            'Cúp máy; không tranh luận và không chuyển thử dù chỉ một khoản nhỏ.',
            'Tự gọi ngân hàng qua số trên thẻ hoặc đến quầy gần nhất.',
            'Nếu đã ra lệnh chuyển, gọi ngân hàng yêu cầu tra soát khẩn và trình báo Công an.'
        ],
        evidence: {
            fact: 'Tại Đà Nẵng, nhân viên ngân hàng và Công an đã kịp chặn một phụ nữ gần 70 tuổi chuyển 300 triệu đồng sau cuộc gọi dọa liên quan đường dây rửa tiền.',
            publisher: 'Cổng thông tin điện tử Bộ Công an',
            publishedAt: '15/08/2025',
            title: 'Kịp thời ngăn chặn cụ bà U70 chuyển 300 triệu đồng cho kẻ giả danh Công an',
            url: 'https://bocongan.gov.vn/bai-viet/kip-thoi-ngan-chan-cu-ba-u70-chuyen-300-trieu-dong-cho-ke-gia-danh-cong-an-lua-dao-1755223901'
        }
    },
    {
        id: 'police-case',
        group: 'Công an',
        title: 'Giả Công an gửi “lệnh bắt” qua Zalo',
        channel: 'Video call · Tệp PDF',
        hook: 'Gây sợ hãi rồi cô lập',
        summary: 'Kẻ gian mặc sắc phục, gửi giấy tờ có dấu đỏ và bắt nạn nhân giữ bí mật để “phục vụ điều tra”.',
        scenario: '10:30, số lạ gọi video. Phía sau là phông nền giống phòng làm việc và một người mặc trang phục Công an.',
        example: [
            {
                speaker: '“Cán bộ điều tra”',
                time: '10:31',
                text: 'CCCD của bác được dùng mở tài khoản nhận 2,4 tỷ đồng tiền rửa. Bác vào phòng riêng, bật camera liên tục để lấy lời khai.'
            },
            {
                speaker: '“Điều tra viên”',
                time: '10:44',
                text: 'Đây là án mật, không được kể cho gia đình hay ngân hàng. Bác nộp 120 triệu đồng để giám định nguồn tiền và chứng minh vô tội.'
            }
        ],
        signs: [
            'Cơ quan điều tra không lấy lời khai, gửi lệnh bắt và thu tiền qua Zalo.',
            'Yêu cầu giữ bí mật với gia đình và nhân viên ngân hàng là cách cô lập nạn nhân.',
            'Trang phục, con dấu, ảnh thẻ và phòng làm việc trong video đều có thể làm giả.'
        ],
        action: [
            'Ngắt cuộc gọi; không cài ứng dụng, chia sẻ màn hình hay gửi ảnh CCCD.',
            'Gọi Công an phường/xã hoặc đến trụ sở để xác minh độc lập.',
            'Báo ngay cho một người thân tin cậy để thoát khỏi trạng thái hoảng sợ.'
        ],
        evidence: {
            fact: 'Bộ Công an cảnh báo kẻ gian dựng cả phòng làm việc, người mặc sắc phục, giấy triệu tập và lệnh bắt giả trong cuộc gọi video để ép nạn nhân chuyển tiền.',
            publisher: 'Bộ Công an',
            publishedAt: '26/11/2025',
            title: 'Cảnh báo tội phạm lừa đảo bằng thủ đoạn “tống tiền trực tuyến”',
            url: 'https://bocongan.gov.vn/bai-viet/canh-bao-toi-pham-lua-dao-bang-thu-doan-tong-tien-truc-tuyen-1764129007'
        }
    },
    {
        id: 'police-fine',
        group: 'Công an',
        title: 'Thông báo “phạt nguội” qua điện thoại',
        channel: 'SMS · Cuộc gọi',
        hook: 'Sợ tăng mức phạt',
        summary: 'Tin nhắn nêu biển số xe, lỗi vi phạm và thúc đóng tiền ngay qua link hoặc tài khoản cá nhân.',
        scenario: '19:42, bác nhận SMS ghi đúng biển số xe gia đình và nói hồ sơ sẽ chuyển cưỡng chế vào sáng hôm sau.',
        example: [
            {
                speaker: '“CSGT 24/7”',
                time: '19:42',
                text: 'Xe 51H-•••.68 vượt đèn đỏ tại Q.1, mức phạt 4.900.000đ. Nộp trước 20:00 để tránh tăng phạt: https://nop-phat.example'
            },
            {
                speaker: '“Cán bộ xử lý”',
                time: '19:47',
                text: 'Bác cài ứng dụng tôi gửi và chia sẻ màn hình, tôi sẽ hỗ trợ xóa lỗi trên hệ thống ngay tối nay.'
            }
        ],
        signs: [
            'Thông báo lỗi giao thông qua SMS hoặc cuộc gọi tự xưng CSGT là giả mạo.',
            'Link thanh toán và ứng dụng được gửi riêng không phải kênh dịch vụ công.',
            'Thúc xử lý ngoài giờ và đe tăng phạt để bác không kịp tra cứu.'
        ],
        action: [
            'Không bấm link, không chuyển tiền và không cài ứng dụng được gửi.',
            'Tự tra cứu trên trang chính thức của Cục CSGT hoặc đến đơn vị ghi trong thông báo bằng văn bản.',
            'Giữ lại số gọi, tin nhắn và ảnh màn hình để phản ánh cho cơ quan chức năng.'
        ],
        evidence: {
            fact: 'Cục CSGT khẳng định mọi trường hợp nhắn tin hoặc gọi điện thông báo lỗi vi phạm giao thông tới người dân đều là giả mạo và có dấu hiệu lừa đảo.',
            publisher: 'Cục Cảnh sát giao thông',
            publishedAt: '09/08/2025',
            title: 'Mọi trường hợp nhắn tin, gọi điện thông báo lỗi vi phạm TTATGT đều là giả mạo',
            url: 'https://www.csgt.vn/tintuc/moi-truong-hop-nhan-tin-goi-dien-thong-bao-loi-vi-pham-ttatgt-deu-la-gia-mao.html'
        }
    },
    {
        id: 'prize-fee',
        group: 'Trúng thưởng',
        title: 'Trúng thưởng nhưng phải mua hàng, đóng phí',
        channel: 'Cuộc gọi · COD',
        hook: 'Mừng trước, trả tiền sau',
        summary: 'Người gọi báo trúng quà lớn nhưng buộc mua một món hàng giá cao hoặc nộp “thuế nhận giải”.',
        scenario: '09:20, người gọi nói số điện thoại của bác là khách hàng may mắn trong chương trình tri ân toàn quốc.',
        example: [
            {
                speaker: '“Ban trao thưởng”',
                time: '09:20',
                text: 'Bác đã trúng xe máy trị giá 46 triệu đồng. Mã giải của bác là A-2706, bên cháu đang ghi âm để bảo đảm quyền lợi.'
            },
            {
                speaker: '“Bộ phận hồ sơ”',
                time: '09:28',
                text: 'Bác chỉ cần nhận máy lọc nước COD 6.980.000đ để kích hoạt giải. Khi giao xe, công ty hoàn lại toàn bộ khoản này.'
            }
        ],
        signs: [
            'Bác không hề đăng ký chương trình nhưng vẫn được báo trúng giải lớn.',
            'Muốn nhận thưởng lại phải mua hàng, đóng thuế hoặc phí trước.',
            'Mã giải, ghi âm cuộc gọi và lời hứa hoàn tiền chỉ là đạo cụ tạo tin cậy.'
        ],
        action: [
            'Từ chối nhận hàng và không trả bất kỳ khoản phí kích hoạt nào.',
            'Tự tìm chương trình trên website chính thức, không dùng số người gọi cung cấp.',
            'Nhắc người nhà không nhận hộ kiện COD không rõ nguồn gốc.'
        ],
        evidence: {
            fact: 'Cuối năm 2025, Công an tỉnh Thanh Hóa triệt phá đường dây “trúng thưởng” nhắm chủ yếu vào người cao tuổi; khoảng 1.000 bị hại, số tiền ước tính hàng trăm tỷ đồng.',
            publisher: 'Công an tỉnh Thanh Hóa · Bộ Công an',
            publishedAt: '29/12/2025',
            title: 'Triệt phá đường dây lừa đảo bằng hình thức thông báo trúng thưởng',
            url: 'https://www.mps.gov.vn/bai-viet/cong-an-tinh-thanh-hoa-triet-pha-duong-day-lua-dao-bang-hinh-thuc-thong-bao-trung-thuong-1766998122'
        }
    },
    {
        id: 'gift-survey',
        group: 'Trúng thưởng',
        title: 'Quà tri ân dẫn sang “nhiệm vụ”',
        channel: 'Facebook · Zalo',
        hook: 'Cho lãi thật ở bước đầu',
        summary: 'Từ một món quà miễn phí, nạn nhân được kéo vào nhóm làm nhiệm vụ tăng doanh số và phải nạp tiền ngày càng lớn.',
        scenario: 'Bác vừa bình luận dưới quảng cáo một món đồ gia dụng. Fanpage chủ động nhắn rằng bác được tặng quà tri ân.',
        example: [
            {
                speaker: 'Fanpage “Siêu thị tri ân”',
                time: '14:08',
                text: 'Cô/chú được tặng nồi chiên miễn phí. Chỉ cần làm một nhiệm vụ 200.000đ để xác nhận khách hàng thật; hệ thống hoàn 240.000đ.'
            },
            {
                speaker: 'Zalo “Kế toán nhiệm vụ”',
                time: '15:36',
                text: 'Lệnh 20.000.000đ vừa ghi sai nội dung nên đang treo. Cô/chú nạp lại 20.000.000đ để mở khóa cả gốc lẫn hoa hồng.'
            }
        ],
        signs: [
            'Quà tặng bị gắn với điều kiện chuyển tiền để làm “nhiệm vụ”.',
            'Khoản nhỏ đầu tiên có thể được hoàn thật để tạo lòng tin.',
            'Sau mỗi lần nạp lại xuất hiện một lỗi mới và khoản “gỡ” lớn hơn.'
        ],
        action: [
            'Dừng ngay khi công việc hoặc quà tặng yêu cầu nạp tiền trước.',
            'Không chuyển thêm để “gỡ” khoản đã mất; đó là bước tiếp theo của bẫy.',
            'Lưu tin nhắn, tài khoản nhận tiền và báo ngân hàng cùng Công an.'
        ],
        evidence: {
            fact: 'Một vụ được Công an Bình Phước tiếp nhận bắt đầu bằng nhiệm vụ 200.000đ và hoàn 240.000đ; sau đó nạn nhân chuyển tiếp 1,15 triệu, 6 triệu rồi 20 triệu đồng.',
            publisher: 'Công an tỉnh Bình Phước · Bộ Công an',
            publishedAt: '17/06/2025',
            title: 'Cảnh giác mạo danh nhân viên Điện Máy Xanh để lừa đảo',
            url: 'https://bocongan.gov.vn/bai-viet/canh-giac-mao-danh-nhan-vien-dien-may-xanh--de-lua-dao-d104-t45623'
        }
    },
    {
        id: 'delivery-address',
        group: 'Giao hàng',
        title: 'Shipper biết đúng món hàng, đúng địa chỉ',
        channel: 'Cuộc gọi · Chuyển khoản',
        hook: 'Thông tin đúng tạo lòng tin',
        summary: 'Kẻ gian có thông tin đơn hàng thật rồi gọi lúc bác vắng nhà, yêu cầu chuyển tiền để gửi hàng cho bảo vệ.',
        scenario: '11:52, bác đang ở ngoài. Người gọi đọc đúng tên món đồ vừa đặt và địa chỉ chung cư.',
        example: [
            {
                speaker: '“Shipper”',
                time: '11:52',
                text: 'Cháu giao bộ ga giường màu xanh, đơn 389.000đ tới sảnh B. Bác chuyển khoản rồi cháu gửi bảo vệ giúp nhé.'
            },
            {
                speaker: '“Shipper”',
                time: '11:55',
                text: 'Bác chuyển vào tài khoản N.T.H này, không phải tên cháu vì đây là tài khoản thu hộ của kho. Cháu đang chạy đơn nên bác làm ngay giúp.'
            }
        ],
        signs: [
            'Biết đúng đơn hàng có thể do thông tin mua sắm đã bị lộ, không chứng minh người gọi là shipper thật.',
            'Tài khoản nhận tiền không khớp tên đơn vị hoặc người giao.',
            'Người gọi thúc chuyển khi bác không thể trực tiếp kiểm tra kiện hàng.'
        ],
        action: [
            'Mở ứng dụng mua hàng để xem mã vận đơn, trạng thái và phương thức thanh toán.',
            'Gọi người bán hoặc đơn vị vận chuyển bằng kênh có sẵn trong ứng dụng.',
            'Chỉ thanh toán trong hệ thống hoặc khi trực tiếp kiểm tra đúng kiện hàng.'
        ],
        evidence: {
            fact: 'Bộ Khoa học và Công nghệ cho biết nhiều người phản ánh bị giả shipper gọi yêu cầu chuyển tiền; cơ quan quản lý đã yêu cầu doanh nghiệp bưu chính tăng bảo mật dữ liệu người dùng.',
            publisher: 'Cổng Thông tin điện tử Chính phủ',
            publishedAt: '03/04/2025',
            title: 'Phòng chống lừa đảo giả danh shipper, tăng cường bảo mật dữ liệu',
            url: 'https://baochinhphu.vn/phong-chong-lua-dao-gia-danh-shipper-bo-khcn-yeu-cau-doanh-nghiep-buu-chinh-tang-cuong-bao-mat-du-lieu-10225040316240619.htm'
        }
    },
    {
        id: 'delivery-small-fee',
        group: 'Giao hàng',
        title: 'Phí vài nghìn biến thành “gói hội viên”',
        channel: 'Cuộc gọi · Link hủy dịch vụ',
        hook: 'Khoản nhỏ làm bác mất cảnh giác',
        summary: 'Sau khi nhận vài nghìn đồng, kẻ gian dọa bác đã đăng ký nhầm dịch vụ trừ tiền hàng tháng rồi dụ vào trang “hủy”.',
        scenario: '09:06, người gọi nói có quà tiêm chủng gửi đến và chỉ cần chuyển 6.000đ phí xác nhận địa chỉ.',
        example: [
            {
                speaker: '“Nhân viên giao hàng”',
                time: '09:06',
                text: 'Bác chuyển giúp 6.000đ phí xác nhận, đơn miễn phí hoàn toàn. Nội dung ghi mã DH4821.'
            },
            {
                speaker: '“Trung tâm hủy dịch vụ”',
                time: '09:11',
                text: 'Bác vừa kích hoạt nhầm gói hội viên 3.600.000đ/tháng. Bấm https://huy-hoi-vien.example và đăng nhập ngân hàng để hủy ngay.'
            }
        ],
        signs: [
            'Khoản phí rất nhỏ chỉ là bước mở đầu để xác nhận bác sẵn sàng làm theo.',
            'Không có gói hội viên hợp pháp nào tự kích hoạt chỉ vì một lần chuyển khoản.',
            'Trang “hủy dịch vụ” yêu cầu đăng nhập ngân hàng hoặc chia sẻ màn hình.'
        ],
        action: [
            'Không bấm link và không làm theo người tự xưng bộ phận hủy dịch vụ.',
            'Kiểm tra biến động trong ứng dụng ngân hàng; khóa tài khoản nếu đã nhập mật khẩu.',
            'Xác minh đơn hàng trực tiếp với cơ sở y tế hoặc đơn vị giao hàng chính thức.'
        ],
        evidence: {
            fact: 'Trong 20 ngày, một đường dây dùng kịch bản giả giao hàng, phí vài nghìn và “hủy dịch vụ” đã lừa hơn 5.000 người, chiếm đoạt trên 15 tỷ đồng.',
            publisher: 'Công an tỉnh Điện Biên · Bộ Công an',
            publishedAt: '14/04/2026',
            title: 'Triệt phá đường dây lừa đảo công nghệ cao xuyên quốc gia, bắt 55 đối tượng',
            url: 'https://bocongan.gov.vn/bai-viet/dien-bien-triet-pha-duong-day-lua-dao-cong-nghe-cao-xuyen-quoc-gia-bat-55-doi-tuong-1776125898'
        }
    },
    {
        id: 'relative-emergency',
        group: 'Khác',
        title: 'Giả giọng, giả video người thân xin tiền gấp',
        channel: 'Messenger · Video call',
        hook: 'Kích hoạt bản năng cứu người thân',
        summary: 'Tài khoản quen nhắn vay tiền, gọi video vài giây với khuôn mặt và giọng giống người thân rồi viện cớ mất sóng.',
        scenario: '21:46, tài khoản của con trai nhắn rằng đang ở bệnh viện tỉnh khác. Cuộc gọi video chỉ kéo dài bảy giây.',
        example: [
            {
                speaker: '“Con trai”',
                time: '21:46',
                text: 'Mẹ ơi con va xe, đang chờ chụp CT. Tài khoản con bị khóa, mẹ chuyển giúp 28.500.000đ cho anh Tùng đi cùng con nhé.'
            },
            {
                speaker: 'Cuộc gọi video',
                time: '21:48',
                text: '[Hình hơi giật, tiếng rè] Mẹ chuyển ngay giúp con… ở đây sóng yếu lắm… [cuộc gọi tắt]'
            }
        ],
        signs: [
            'Video rất ngắn, hình giật hoặc tiếng và khẩu hình không khớp.',
            'Yêu cầu chuyển vào tài khoản mang tên người khác.',
            'Người gọi né câu hỏi riêng chỉ người thân thật mới biết.'
        ],
        action: [
            'Dừng chuyển tiền và gọi lại số điện thoại đã lưu từ trước.',
            'Hỏi một chi tiết riêng hoặc gọi thêm người đang ở gần người thân.',
            'Gia đình nên thống nhất một “mật khẩu an toàn” dùng khi có việc khẩn cấp.'
        ],
        evidence: {
            fact: 'Tọa đàm dưới sự bảo trợ của Bộ Công an đã phân tích các tình huống thực tế dùng deepfake giả khuôn mặt, giọng nói người thân để vay tiền và lừa chuyển khoản.',
            publisher: 'Bộ Công an',
            publishedAt: '29/01/2026',
            title: '“Vui Tết an toàn - không lo Deepfake”: Chung tay đẩy lùi lừa đảo trực tuyến',
            url: 'https://bocongan.gov.vn/bai-viet/vui-tet-an-toan-khong-lo-deepfake-chung-tay-day-lui-lua-dao-truc-tuyen-1769684195'
        }
    },
    {
        id: 'remote-job',
        group: 'Khác',
        title: 'Việc online: trả lãi nhỏ, giữ khoản lớn',
        channel: 'Facebook · Telegram',
        hook: 'Dùng tiền lời thật để nuôi niềm tin',
        summary: 'Quảng cáo “30 phút mỗi ngày” đưa nạn nhân vào ứng dụng nhiệm vụ; rút được tiền lúc đầu nhưng phải nạp ngày càng nhiều.',
        scenario: 'Một tài khoản tuyển dụng mời bác làm cộng tác viên chốt đơn tại nhà, không cần kinh nghiệm.',
        example: [
            {
                speaker: '“Chuyên viên tuyển dụng”',
                time: '08:32',
                text: 'Cô/chú chỉ cần ứng tiền giúp shop chốt đơn, 10 phút hoàn cả gốc và 20% hoa hồng. Đơn thử 500.000đ được rút ngay.'
            },
            {
                speaker: 'Ứng dụng “Nhiệm vụ 4/4”',
                time: '10:18',
                text: 'Số dư: 86.400.000đ. Tài khoản chưa hoàn tất đơn liên kết; vui lòng nạp thêm 32.000.000đ để mở quyền rút tiền.'
            }
        ],
        signs: [
            'Công việc lại yêu cầu người lao động ứng tiền để được làm.',
            'Số dư và lợi nhuận chỉ là con số do ứng dụng của kẻ gian tạo ra.',
            'Muốn rút tiền luôn phát sinh thêm “đơn liên kết”, thuế hoặc phí mở khóa.'
        ],
        action: [
            'Không nhận công việc yêu cầu nạp tiền, mua đơn hoặc chuyển tiền thử.',
            'Không vay thêm để hoàn tất chuỗi nhiệm vụ.',
            'Nếu đã chuyển, lưu toàn bộ bằng chứng và liên hệ ngân hàng ngay.'
        ],
        evidence: {
            fact: 'Công an tỉnh Đồng Nai cho biết một đường dây dùng ứng dụng thương mại điện tử giả để giao “nhiệm vụ” đã chiếm đoạt hơn 2.500 tỷ đồng của hàng nghìn nạn nhân.',
            publisher: 'Công an tỉnh Đồng Nai · Bộ Công an',
            publishedAt: '13/02/2026',
            title: 'Triệt phá chuyên án lừa đảo trên không gian mạng quy mô đặc biệt lớn',
            url: 'https://www.bocongan.gov.vn/bai-viet/cong-an-tinh-dong-nai-phoi-hop-triet-pha-chuyen-an-lua-dao-tren-khong-gian-mang-quy-mo-dac-biet-lon-1770992938'
        }
    },
    {
        id: 'malware-link',
        group: 'Khác',
        title: 'Ứng dụng VNeID giả chiếm quyền điện thoại',
        channel: 'Cuộc gọi · Tệp APK',
        hook: 'Mượn danh dịch vụ công',
        summary: 'Người tự xưng Công an phường gửi tệp cài đặt ngoài kho ứng dụng rồi hướng dẫn bật quyền trợ năng và chia sẻ màn hình.',
        scenario: '14:25, người gọi biết họ tên và nơi ở, nói hồ sơ định danh của bác sắp hết hạn đồng bộ.',
        example: [
            {
                speaker: '“Cán bộ phường”',
                time: '14:25',
                text: 'Bác chưa đồng bộ thông tin cư trú nên ngày mai VNeID sẽ bị khóa. Tôi gửi bản cập nhật để bác khỏi phải lên trụ sở.'
            },
            {
                speaker: 'Hướng dẫn qua Zalo',
                time: '14:31',
                text: 'Tải tệp VNeID_capnhat.apk, cho phép “cài ứng dụng không rõ nguồn” và bật Trợ năng để hệ thống tự quét CCCD.'
            }
        ],
        signs: [
            'Ứng dụng được gửi dưới dạng tệp APK thay vì từ CH Play hoặc App Store.',
            'Yêu cầu bật quyền Trợ năng, xem màn hình hoặc đọc SMS là dấu hiệu chiếm quyền thiết bị.',
            'Cơ quan Công an không gọi để hướng dẫn cài VNeID qua đường link lạ.'
        ],
        action: [
            'Không tải tệp; chỉ cài VNeID từ kho ứng dụng chính thức.',
            'Nếu đã cài, ngắt mạng, không mở ứng dụng ngân hàng và dùng thiết bị khác gọi ngân hàng khóa dịch vụ.',
            'Mang máy tới nơi hỗ trợ kỹ thuật tin cậy và trình báo cơ quan Công an.'
        ],
        evidence: {
            fact: 'Một tổ chức tội phạm dùng VNeID giả chứa mã độc đã chiếm đoạt hơn 160 tỷ đồng của gần 400 người trước khi bị triệt phá.',
            publisher: 'Công an tỉnh Cao Bằng · Bộ Công an',
            publishedAt: '15/09/2025',
            title: 'Triệt phá tổ chức dùng mạng máy tính, phương tiện điện tử chiếm đoạt tài sản',
            url: 'https://mps.gov.vn/bai-viet/cao-bang-triet-pha-thanh-cong-to-chuc-toi-pham-xuyen-quoc-gia-su-dung-mang-may-tinh-mang-vien-thong-phuong-tien-dien-tu-chiem-doat-tai-san-1757991967'
        }
    },
    {
        id: 'investment',
        group: 'Khác',
        title: 'Làm quen tình cảm rồi kéo vào sàn đầu tư',
        channel: 'Mạng xã hội · Website giả',
        hook: 'Nuôi quan hệ trước khi nói đến tiền',
        summary: 'Người lạ trò chuyện tử tế nhiều tuần, khoe tài khoản sinh lời rồi hướng dẫn nạn nhân đầu tư trên một sàn do chúng kiểm soát.',
        scenario: 'Một người tự giới thiệu là kỹ sư đang sống ở nước ngoài kết bạn sau khi thấy bài đăng cho thuê nhà của bác.',
        example: [
            {
                speaker: '“Minh — kỹ sư tại Singapore”',
                time: '20:14',
                text: 'Anh không muốn em bỏ nhiều đâu. Thử 2 triệu để hiểu cách làm; tuần này đội phân tích của anh có tín hiệu rất chắc.'
            },
            {
                speaker: '“Chăm sóc sàn”',
                time: '09:03 · ba tuần sau',
                text: 'Tài khoản 468.000.000đ đang bị kiểm tra chống rửa tiền. Nộp thuế 30% trong hôm nay để mở khóa lệnh rút.'
            }
        ],
        signs: [
            'Mối quan hệ tiến triển nhanh, câu chuyện cá nhân hoàn hảo và sớm chuyển sang đầu tư.',
            'Sàn cho rút khoản nhỏ để tạo niềm tin rồi khuyến khích nạp khoản lớn.',
            'Khi rút tiền, hệ thống đòi nộp thêm 30–40% “thuế” hoặc “phí chống rửa tiền”.'
        ],
        action: [
            'Không đầu tư qua link hoặc ứng dụng do người mới quen gửi.',
            'Kiểm tra pháp nhân và giấy phép bằng nguồn quản lý nhà nước độc lập.',
            'Kể cho người thân biết trước khi chuyển khoản lớn; dừng ngay nếu bị yêu cầu nộp thêm để rút tiền.'
        ],
        evidence: {
            fact: 'Bộ Công an mô tả đúng kịch bản: làm quen qua mạng, xây dựng tình cảm, cho rút tiền nhỏ rồi khóa khoản lớn và đòi nộp thêm 30–40% để được rút.',
            publisher: 'Bộ Công an',
            publishedAt: '02/05/2025',
            title: 'Cảnh báo dụ dỗ đầu tư tài chính, chứng khoán, tiền ảo trên không gian mạng',
            url: 'https://bocongan.gov.vn/bai-viet/canh-bao-thu-doan-du-do-tham-gia-dau-tu-tai-chinh-san-chung-khoan-tien-ao-tren-khong-gian-mang-d104-t44828'
        }
    }
]);
