import styled from 'styled-components';

export const Table = styled.table(
  ({ theme: { colors } }) => `
    width: 100%;
    border-collapse: separate;
    color: ${colors.bootsBlue};

    th {
      height: 60px;
      font-weight: 300;
      font-size: 16px;
      border-bottom: 2px solid ${colors.bootsBlue};
      text-align: left;
      padding: 4px 4px;
      background: ${colors.white};
    }

    th:first-child {
      border-top-left-radius: 3px;
      border-top-right-radius: 3px;
    }

    td {
      height: 60px;
      font-weight: 300;
      font-size: 16px;
      text-align: left;
      padding: 4px 4px;
      background: ${colors.white};
    }

    td:first-child {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }

    td:last-child {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  `
);

export const SelectAllCheckboxRowHeadind = styled.th`
  width: 45px;
`;

export const SelectCheckboxRowData = styled.td`
  margin-left: 5px;
`;

export const CheckboxWrapper = styled.div`
  display: inline-block;
  margin-left: 5px;
`;

export const SelectAllCheckboxWrapper = styled(CheckboxWrapper)`
  display: inline-block;
  margin-top: 3px;
  margin-left: 3px;
`;

export const Checkbox = styled.input<any>`
  position: absolute;
  z-index: -1;
  opacity: 0;

  :checked + label::before {
    border-color: ${({ theme: { colors } }) => colors.primary};
    background-color: ${({ theme: { colors } }) => colors.primary};
    background-image: url('assets/icons/checkbox_checked.svg');
  }
`;

export const CheckboxLabel = styled.label<any>`
  font-weight: 300;
  font-size: 8px;
  user-select: none;

  ::before {
    content: '';
    display: flex;
    width: 21px;
    height: 21px;
    border: 2px solid ${({ theme: { colors } }) => colors.grayLightSecondary};
    border-radius: 5px;
    background-repeat: no-repeat;
    background-position: 3px 6px;
    background-size: 15px;
  }
`;

// @ts-ignore
export const StatusWrapper = styled.div<any>(({ status, theme: { colors } }) => {
  switch (status) {
    case 'new':
      return `
      font-size: 18px;
      background: red;
      padding: 13px 12px;
      border-radius: 5px;
      min-width: 135px;
      background: ${colors.pharmacyGreen};
      color: ${colors.white};
      `;
  }
});

export const DetailsTableData = styled.td`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 45px;
  margin-left: 12px;
`;

export const DetailsIcon = styled.img`
  width: 27px;
  height: 27px;
  cursor: pointer;
`;

// @ts-ignore
export const ServiceNameData = styled.div<any>(({ service, theme: { colors } }) => {
  switch (service) {
    case 'Service Name':
      return `
        display: flex;
        align-items: center;

        :before {
          content: '';
          width: 10px;
          height: 54px;
          background: ${colors.sexualHealth};
          border-radius: 2px;
          margin-right: 5px;
        }
      `;
    case 'Cystitis':
      return `
        display: flex;
        align-items: center;

        :before {
          content: '';
          width: 10px;
          height: 54px;
          background: ${colors.menHealth};
          border-radius: 2px;
          margin-right: 6px;
        }
      `;
  }
});
