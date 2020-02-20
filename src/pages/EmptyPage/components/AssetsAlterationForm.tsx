import { InfoCircleOutlined } from '@ant-design/icons';
import { Form } from '@ant-design/compatible';
import '@ant-design/compatible/assets/index.css';
import { Button, Card, DatePicker, Input, InputNumber, Radio, Select, Tooltip,Row,Col } from 'antd';
import { FormattedMessage, formatMessage } from 'umi-plugin-react/locale';
import React, { Component } from 'react';

import { Dispatch } from 'redux';
import { FormComponentProps } from '@ant-design/compatible/es/form';
import { PageHeaderWrapper } from '@ant-design/pro-layout';
import { connect } from 'dva';
// import styles from './style.less';

const FormItem = Form.Item;
const { Option } = Select;
const { RangePicker } = DatePicker;
const { TextArea } = Input;

interface FormBasicFormProps extends FormComponentProps {
  submitting: boolean;
  dispatch: Dispatch<any>;
}

class FormBasicForm extends Component<FormBasicFormProps> {
  handleSubmit = (e: React.FormEvent) => {
    const { dispatch, form } = this.props;
    e.preventDefault();
    form.validateFieldsAndScroll((err, values) => {
      if (!err) {
        dispatch({
          type: 'formBasicForm/submitRegularForm',
          payload: values,
        });
      }
    });
  };

  render() {
    const { submitting } = this.props;
    const {
      form: { getFieldDecorator, getFieldValue },
    } = this.props;

    const formItemLayout = {
      labelCol: {
        xs: { span: 6 },
        sm: { span: 5 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 24},
        md: { span: 14 },
      },
    };

    const submitFormLayout = {
      wrapperCol: {
        xs: { span: 24, offset: 0 },
        sm: { span: 12, offset: 7 },
      },
    };
    return (
      <section style={{border:"1px solid #999",marginBottom:"10px"}}>
        <Card bordered={false}>
          <Form onSubmit={this.handleSubmit} hideRequiredMark style={{ marginTop: 8 }}>
            <Row gutter={0}>
              <Col span={6}>
                  <FormItem {...formItemLayout} label="货币">
                  {getFieldDecorator('title', {
                    rules: [
                      {
                        required: true,
                        message: formatMessage({ id: 'formbasicform.title.required' }),
                      },
                    ],
                  })(<Select
                    mode="multiple"
                    placeholder="全部"
                    style={{
                      width:'100%',
                    }}
                  >
                    <Option value="1">
                      <FormattedMessage id="formbasicform.option.A" />
                    </Option>
                    <Option value="2">
                      <FormattedMessage id="formbasicform.option.B" />
                    </Option>
                    <Option value="3">
                      <FormattedMessage id="formbasicform.option.C" />
                    </Option>
  </Select>)}
                </FormItem>
              </Col>
              <Col span={8}>
              <FormItem {...formItemLayout} label="日期">
              {getFieldDecorator('date', {
                rules: [
                  {
                    required: true,
                    message: formatMessage({ id: 'formbasicform.date.required' }),
                  },
                ],
              })(
                <RangePicker
                  style={{ width: '100%' }}
                  placeholder={[
                    formatMessage({ id: 'formbasicform.placeholder.start' }),
                    formatMessage({ id: 'formbasicform.placeholder.end' }),
                  ]}
                />,
              )}
            </FormItem>
              </Col>
              <Col span={10}>
                <FormItem {...submitFormLayout}>
                <Button type="primary" htmlType="submit" loading={submitting}>
                查询
                </Button>
                <Button type="primary" style={{ marginLeft: 4 }}>
                  重置
                </Button>
                <Button type="primary" style={{ marginLeft: 4 }}>
                 导出
                </Button>
            </FormItem>
              </Col>
            </Row>
            
          </Form>
        </Card>
      </section>
    );
  }
}

export default Form.create<FormBasicFormProps>()(
  connect(({ loading }: { loading: { effects: { [key: string]: boolean } } }) => ({
    submitting: loading.effects['formBasicForm/submitRegularForm'],
  }))(FormBasicForm),
);
