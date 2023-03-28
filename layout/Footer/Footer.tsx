import React, { FC, ReactNode } from 'react';
import { WrapperContainer } from '../Wrapper/Wrapper';
//my
const Footer: FC = () => {
	return (
		<footer className='footer'>
			<WrapperContainer className='d-flex flex-column'>
				<p>
					© All Rights Reserved 2022. «Питчликс», ИНН 7734455290, ОГРН 1227700332969.
					Любая информация и все товары, представленные на сайте, являются
					интеллектуальной собственностью Питчликс и охраняются в соотвествии
					с законодательством о защите авторских прав и других прав интеллектуальной
					собственности. Воспроизведение информационных материалов, не относящихся
					к товарам магазина, возможно только после получения разрешения на публикацию
					в средствах массовой информации для рекламных и информационных целей. При
					посещении данного сайта, пользователи и покупатели дают Согласие на обработку
					персональных данных субъекта персональных данных и принимают Политику
					конфиденциальности и обработки персональных данных. Для покупателей на сайте
					действуют следующие Правила использования и условия приобретения цифровых
					товаров, разработанные в соотвествии с Лицензионным соглашением (публичной
					офертой).
				</p>
				<p className='m-0'>
					Все материалы, представленные на сайте носят рекомендательный,
					познавательно-просветительский характер.
				</p>
			</WrapperContainer>
		</footer>
	);
};

export default Footer;