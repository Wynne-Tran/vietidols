import React from 'react'
import { Card, Button } from 'react-bootstrap'
import { Link} from 'react-router-dom'
import './Home.css'

import {getcurrentUser} from '../../services/auth.service'
import SignIn from '../SignIn/SignIn'
import DonDangKy from '../../Don-dang-ky-thi-hat-2021.pdf'

const Home = () => {

    const user = getcurrentUser()
    console.log(user)
    return (
        (user !== null ? <Card>
            <Card.Body>
                <Card.Title>
                    <div className="cardtitle">
                    <h1>HUONG DUONG UNIVERSAL MEDIA</h1>
                    <h3>1125 Dufferin Street, Toronto, Canada, M6H 4B7</h3>
                    <h3>Email: info@huongduongunimedia.ca</h3>
                    <h3>Web: www.vietidols.com</h3>
                    </div>
                </Card.Title>
                <hr></hr>
                <Card.Text>
                    <h1>THÔNG BÁO</h1>
                    <h2>Cuộc thi "GIỌNG HÁT VIỆT TRỰC TUYẾN TOÀN CẦU"</h2>
                    <p>- Đơn vị tổ chức: công ty HUONG DUONG Universal Media (Canada).</p>
                    <p>+ Giám Đốc Điều Hành: Minh Chiêu Anh<br/>+ Phó Giasm Đốc Điều Hành: Ca sỹ Như Hoa<br/>- Ban Giám Khảo chung kết: nhạc sỹ Trường Sa và nhạc sỹ Hòa Bình<br/>- Ban Giám Khảo Sơ Tuyển và Bán Kết: ca sỹ Như Hoa, ca sỹ Nguyên Dũng và Nhạc sỹ Andy<br/>- Nhà tài trợ: Vietidols, Piel Services Ltd, Hung Trung Services Trading Co,..</p>
                </Card.Text>
                <hr></hr>
                <Card.Text>
                    <strong><p>- Đơn vị đăng ký Online theo link: https: https://vietidols.com</p></strong>
                    <strong><p>Điều 1: Đối tượng tham gia</p></strong>
                    <p> Tất cả mọi người từ 16 tuổi trở lên</p>
                    <p> Đối tượng tham gia không được là nhân viên của đơn vị tổ chức, nhà tài trợ, người thân của thành viên Ban tổ chức (BTC)</p>
                    
                    <strong><p>Điều 2: Thời gian chương trình</p></strong>
                    <p> Chương trình dự kiến từ ngày 01/03/2021 đến ngày 15/05/2021 với các chi tiết như sau:</p>
                    <p> - Từ ngày 01/03/2021 đến ngày 31/03/2021 nhận hồ sơ đăng ký và 2 videos (mỗi video 1 bài) hát với nhạc không chỉnh sửa giọng.</p>
                    <p> - Ngày 10/04/2021 công bố kết quả vòng sơ tuyển trên fanpage Giọng Hát Việt Trực Tuyến Toàn Cầu và trang điện tử vietidols.com</p>
                    <p> - Ngày 16-17-18 tháng 4, 2021 thi bán kết: thi tại nhóm Giọng Hát Việt Trực Tuyến Toàn Cầu trên facebook theo link https://www.facebook.com/groups/724323565064795</p>
                    <p> - Mỗi thí sinh trình bày 2 ca khúc tự chọn có nhạc trong thời gian 15 phút</p>
                    <p> - Ngày 23/04/2021: Công bố danh sách thí sinh vào chung kết</p>
                    <p> - Ngày 7-8 tháng 5, 2021 thi chung kết: Thi tại nhóm Giọng Hát Việt Trực Tuyến Toàn Cầu trên facebook theo link https://www.facebook.com/groups/724323565064795</p>
                    <p> - Thí sinh hát một bài tự chọn và một bài yêu cầu có nhạc trong vòng 15 phút</p>
                    <p> - Ngày 15/05/2021 Công bố chung kết trao giải</p>
                    <p> (Trong trường hợp bất khả kháng, nếu ngày thi hoặc ngày trao giải thay đổi sẽ được thông báo sau)</p>
                    
                    <strong><p>Điều 3: Qui định hồ sợ dự thi và cách thức tham gia:</p></strong>
                    <p> BTC nhận hồ sơ đến hết ngày 31/03/2021. Hồ sơ gửi sau 23h59 ngày 31/03/2021 được xem là không hợp lệ </p>
                    <p> Hồ sơ dự thi gồm:</p>
                    <p> - Đơn dự thi</p>
                    <p> - Một ảnh chân dung và một ảnh toàn thân (Đối với ảnh gửi qua email, phải được thể hiện dưới dạng file ảnh định dạng JPEG hoặc JPG có chiều ngang dưới 1.000 pixel)</p>
                    <p> - Hai bài hát (không hạn chế thể loại)</p>
                    <p> - Hồ sơ dự thi trực tuyến gởi về hộp thư điện tử:<br/>Email: info@huongduongunimedia.com và huongduongcanada@gmail.com</p>
                    
                    <strong><p>Điều 4: Giải thưởng:</p></strong>
                    <p> - Giải nhất (1 giải):  20 triệu VND/ CAN 1,000 và giấy chứng nhận của BTC</p> 
                    <p> - Giải nhì (1 giải): 10 triệu VND/ CAN 500  và giấy chứng nhận của BTC</p>
                    <p> - Giải ba (1 giải): 5  triệu VND/ CAN 250  và giấy chứng nhận của BTC</p>
                    <p> - Các giải phụ: 2 triệu VND/ CAN 100  và giấy chứng nhận của BTC</p>
                
                    <strong><p>Điều 5: Tiêu chuẩn chấm giải và các vòng thi của giải:</p></strong>
                    <p> Tổng cộng sẽ có 50 thí sinh được chọn vào vòng chung kết</p>
                    <p> Ban giám khảo sẽ bình chọn 10 thí sinh xuất sắc nhất trong 50 thí sinh để vào vòng chung kết xếp hạng.</p>
                    <p> Cách chấm điểm như sau: </p>
                    <p> a/ Trình diễn:</p>
                    <p> - Phong cách trình diễn</p>
                    <p> - Trang phục</p>
                    <p> b/ Giọng hát:</p>
                    <p> - Phát âm, nhịp điệu, cách diễn đạt</p>
                    <p> c/ Cách tính điểm</p>
                    <p> - Phong cách trình diễn:  30% tổng số điểm</p>
                    <p> - Giọng hát: 50% tổng số điểm</p>
                    <p> - Ban tổ chức sẽ tính thêm điểm dựa trên số luợng bình luận (comments) và chia sẻ (shares): 20%</p>
                
                    <strong><p>Điều 6: Công bố hình ảnh, thông tin</p></strong>
                    <p> Thi sinh chịu trách nhiệm về tính xác thực của thông tin</p>
                    <p> BTC được toàn quyền sử dụng ảnh và bài hát thu hình trong suốt chương trình cho đến khi kết thúc</p>
                    <p> Ca khúc dự thi phải đúng nguyên bản Việt ngữ có nội dung lành mạnh</p>
                
                    <strong><p>Điều 7: Bản quyền</p></strong>
                    <p> BTC có quyền xuất bản, quảng bá thương mại với hình ảnh và bảng thu âm giọng dự thi của người thí sinh mà không cần phải báo trước và không cần thêm bất kỳ một chi phí nào</p>
                    <p> Thí sinh sẽ phải có mặt tại chương trình do Ban tổ chức thông báo </p>
                
                    <strong><p>Điều 8: Hạn chế trách nhiệm</p></strong>
                    <p> BTC không chịu trách nhiệm với các bản thu âm giọng bị thay đổi, biến dạng do   mạng Internet</p>
                    <p> BTC không chịu trách nhiệm về hồ sơ dự thi thất lạc hoặc hồ sơ  đến trễ so với thời gian quy định của cuộc thi đối với các thi sinh gửi hồ sơ dự thi qua đường email</p>
                    <p> BTC không chịu trách nhiệm những thông tin khai không đúng của thí sinh</p>
                
                    <strong><p>Điều 9: Điều kiện pháp lý</p></strong>
                    <p> BTC giữ quyền kiểm tra tư cách của người thí sinh có hợp thức, có theo đúng các Điều lệ của cuộc thi hay không, kể cả sau khi đã trao giải. Chỉ BTC mới có quyền trao giải thưởng và thu hồi giải thưởng</p>
                
                    <strong><p>Điều 10: Công bố giải thưởng</p></strong>
                    <p> Giải thưởng cuộc thi “GIỌNG HÁT VIỆT TRỰC TUYẾN TOÀN CẦU – 2021”</p>
                    <p> Đối với các thí sinh vào vòng chung kết nhưng không liên hệ với Ban tổ chức để nhận giải thưởng sau 07 ngày kể từ ngày được thông báo, thì xem như thí sinh từ chối nhận giải thưởng và BTC không chịu trách nhiệm giải quyết trường hợp này</p>
                    <p> Toàn bộ danh hiệu, giải thưởng của cuộc thi sẽ được BTC công bố trên trang thông tin điện tử: vietidols.com và fanpage GIỌNG HÁT VIỆT TRỰC TUYẾN TOÀN CẦU</p>
            
                    <strong><p>Điều 11: Dừng hoặc hủy cuộc thi</p></strong>
                    <p> Trong truờng hợp bất khả kháng như thiên tai, bạo loạn, chiến tranh,..BTC sẽ thay đổi ngày thi và sẽ thông báo với thí sinh qua email để biết thêm chi tiết về cuộc thi</p>
                
                    <strong><p>Điều 12: Các quy định khác</p></strong>
                    <p> Bản Thể lệ này có hiệu lực kể từ thời điểm được đăng tải lên trang thông tin điện tử www.vietidols.com và fanpage Giọng Hát Việt Trực Tuyến Toàn Cầu</p>
                    <p> Trong mọi trường hợp, BTC bảo lưu quyền thay đổi, bổ sung hoặc chỉnh sửa một phần hoặc toàn bộ nội dung của Thể Lệ này miễn là những sửa đổi hoặc bổ sung đó không làm ảnh hưởng đến quyền lợi của thí sinh</p>
                </Card.Text>
                <Button variant="primary">
                    <Link style={{color: 'white'}} to={DonDangKy} target="_blank" download>Nhấn vào đây để tải về đơn dự thi</Link>
                </Button>
            </Card.Body>
            <Card.Footer className="text-muted">
                <p>Toronto, Canada ngày 20 tháng 02 năm 2021</p>
                <br/>
                <p>Minh Chiêu Anh</p>
                <p>Giám Đốc Điều Hành</p>
                <p>Huong Duong Universal Media</p>
            </Card.Footer>
        </Card> 
        :
        <SignIn />)
    )
}

export default Home