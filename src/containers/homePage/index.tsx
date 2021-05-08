import React from 'react';
import { translations } from 'locales/i18n';
import { useTranslation } from 'react-i18next';
import MainTable from './mainTable';
import Search from '../../shared/components/search';
import { Wrapper, Button, ToolBar, Link, OptionalToolbar, LinkContainer } from './styles';

const tableDummyData = [
  {
    patientName: 'Wolfstern, Hubert Blaine',
    serviceName: 'Cystitis',
    visitDateAndTime: 'XX/XX/XX  00:00 PM',
    dueDate: '24/04/21',
    orderID: '000001',
    status: { value: 'new', label: 'New' }
  },
  {
    patientName: 'Wolfstern, Hubert Blaine',
    serviceName: 'MAP (Emergency Contraception)',
    visitDateAndTime: 'XX/XX/XX  00:00 PM',
    dueDate: '24/04/21',
    orderID: '000002',
    status: { value: 'new', label: 'New' }
  },
  {
    patientName: 'Wolfstern, Hubert Blaine',
    serviceName: 'Service Name',
    visitDateAndTime: 'XX/XX/XX  00:00 PM',
    dueDate: '24/04/21',
    orderID: '000003',
    status: { value: 'new', label: 'New' }
  },
  {
    patientName: 'Wolfstern, Hubert Blaine',
    serviceName: 'Service Name',
    visitDateAndTime: 'XX/XX/XX  00:00 PM',
    dueDate: '24/04/21',
    orderID: '000004',
    status: { value: 'new', label: 'New' }
  },
  {
    patientName: 'Wolfstern, Hubert Blaine',
    serviceName: 'Service Name',
    visitDateAndTime: 'XX/XX/XX  00:00 PM',
    dueDate: '24/04/21',
    orderID: '000005',
    status: { value: 'new', label: 'New' }
  },
  {
    patientName: 'Wolfstern, Hubert Blaine',
    serviceName: 'Service Name',
    visitDateAndTime: 'XX/XX/XX  00:00 PM',
    dueDate: '24/04/21',
    orderID: '000006',
    status: { value: 'new', label: 'New' }
  },
  {
    patientName: 'Wolfstern, Hubert Blaine',
    serviceName: 'Service Name',
    visitDateAndTime: 'XX/XX/XX  00:00 PM',
    dueDate: '24/04/21',
    orderID: '000007',
    status: { value: 'new', label: 'New' }
  },
  {
    patientName: 'Wolfstern, Hubert Blaine',
    serviceName: 'Service Name',
    visitDateAndTime: 'XX/XX/XX  00:00 PM',
    dueDate: '24/04/21',
    orderID: '000008',
    status: { value: 'new', label: 'New' }
  }
];

const HomePage = (): JSX.Element => {
  const { t } = useTranslation();

  return (
    <Wrapper>
      <ToolBar>
        <Button>{t(translations.home.scanPdf)}</Button>
        <Button disabled>{t(translations.home.printPdf)}</Button>
      </ToolBar>
      <OptionalToolbar>
        <Search />
        <LinkContainer>
          <Link>
            {t(translations.home.printShipping)}
            <img src={'assets/images/delivery.svg'} />
          </Link>
          <Link>
            {t(translations.home.updateStatus)}
            <img src={'assets/images/edit.svg'} />
          </Link>
        </LinkContainer>
      </OptionalToolbar>
      <MainTable tableData={tableDummyData} />
    </Wrapper>
  );
};

export default HomePage;
