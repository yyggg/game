export default {
    show: '在表格列中显示',
    width: '表格列宽度',
    sortable: '字段排序',
    operator: '公共搜索操作符',
    render: '渲染方案',
    timeFormat: '格式化方式',
    step: '步进值',
    rows: '行数',
    'remote-pk': '远程下拉value字段',
    'remote-field': '远程下拉label字段',
    'remote-url': '远程下拉URL',
    'remote-controller': '关联表的控制器',
    'remote-table': '关联数据表',
    'remote-model': '关联表的模型',
    'relation-fields': '关联表显示字段',
    'image-multi': '图片多选上传',
    'file-multi': '文件多选上传',
    'select-multi': '下拉框多选',
    validator: '验证规则',
    validatorMsg: '验证错误提示',
    copy: '复制设计',
    'CRUD record': 'CRUD记录',
    'Delete Code': '删除代码',
    'Start CRUD design with this record?': '以此记录开始CRUD设计？',
    'Are you sure to delete the generated CRUD code?': '确认删除生成的CRUD代码？',
    start: '开始',
    create: '新建',
    'New background CRUD from zero': '从零新建后台CRUD',
    'Select Data Table': '选择数据表',
    'Select a designed data table from the database': '从数据库中选择一个设计好的数据表',
    'Start with previously generated CRUD code': '从以往生成的CRUD代码开始',
    'Fast experience': '快速体验',
    'Please enter SQL': '请输入SQL',
    'Please select a data table': '请选择数据表',
    'data sheet help': '数据表前缀需要同项目配置的数据表前缀一致',
    'data sheet': '数据表',
    'table create SQL': '建表SQL',
    'Please enter the table creation SQL': '请输入建表SQL',
    'experience 1 1': '准备好',
    'experience 1 2': '开发环境',
    'experience 1 3': '（站点端口为：1818）',
    'experience 2 1': '在本页点击',
    'experience 2 2': '选择数据表',
    'experience 2 3': '，并选择',
    'experience 3 1': '点击',
    'experience 3 2': '生成CRUD代码',
    'experience 3 3': '，点击',
    'experience 3 4': '继续生成',
    // design
    'Name of the data table': '数据表的名称',
    'Data Table Notes': '数据表注释',
    'Generate CRUD code': '生成 CRUD 代码',
    'give up': '放弃',
    'Table Quick Search Fields': '表格快速搜索字段',
    'Table Default Sort Fields': '表格默认排序字段',
    'sort order': '排序方式',
    'sort order asc': 'asc-顺序',
    'sort order desc': 'desc-倒序',
    'Fields as Table Columns': '作为表格列的字段',
    'Fields as form items': '作为表单项的字段',
    'Generated Controller Location': '生成的控制器位置',
    'Generated Data Model Location': '生成的数据模型位置',
    'Generated Validator Location': '生成的验证器位置',
    'WEB end view directory': 'WEB端视图目录',
    'Advanced Configuration': '高级配置',
    'Common Fields': '常用字段',
    'Base Fields': '基础字段',
    'Advanced Fields': '高级字段',
    'Field Name': '字段名',
    'field comment': '字段注释',
    'Please select a field from the left first': '请先从左侧选择一个字段',
    Common: '常用',
    generate: '生成为',
    'Field comments (CRUD dictionary)': '字段注释（CRUD字典）',
    'Field Properties': '字段属性',
    'Field Type': '字段类型',
    length: '长度',
    'decimal point': '小数点',
    'Field Defaults': '字段默认值',
    'You can directly enter null, 0, empty string': '可以直接输入null、0、empty string',
    'Auto increment': '自动递增',
    Unsigned: '无符号',
    'Allow NULL': '允许NULL',
    'Field Form Properties': '字段表单属性',
    'Field Table Properties': '字段表格属性',
    'Remote drop-down association information': '远程下拉关联信息',
    'Associated Data Table': '关联数据表',
    'Drop down value field': '下拉value字段',
    'Drop down label field': '下拉label字段',
    'Please select the value field of the select component': '请选择select组件的value字段',
    'Please select the label field of the select component': '请选择select组件的label字段',
    'Fields displayed in the table': '在表格中显示的字段',
    'Please select the fields displayed in the table': '请选择在表格中显示的字段',
    'Controller position': '控制器位置',
    'Please select the controller of the data table': '请选择数据表的控制器',
    'Data Model Location': '数据模型位置',
    'Please select the data model location of the data table': '请选择数据表的数据模型位置',
    'Confirm CRUD code generation': '确认生成CRUD代码',
    'Continue building': '继续生成',
    'Please enter the data table name!': '请输入数据表名！',
    'Please design the primary key field!': '请设计主键字段！',
    'It is irreversible to give up the design Are you sure you want to give up?': '放弃设计不可逆，确定要放弃吗？',
    'There can only be one primary key field': '只可以有一个主键字段。',
    'Drag the left element here to start designing CRUD': '拖动左侧元素至此处以开始设计CRUD',
    'The data table already exists Continuing to generate will automatically delete the original table and create a new one!':
        '数据表已经存在，继续生成将自动删除原表并建立新的数据表！',
    'The controller already exists Continuing to generate will automatically overwrite the existing code!':
        '控制器已经存在，继续生成将自动覆盖已有代码！',
    'For example: `user table` will be generated into `user management`': '如：`会员表`将生成为`会员管理`',
    'The remote pull-down will request the corresponding controller to obtain data, so it is recommended that you create the CRUD of the associated table':
        '远程下拉将请求对应的控制器来获取数据，所以建议先生成好被关联表的CRUD',
    'If it is left blank, the model of the associated table will be generated automatically If the table already has a model, it is recommended to select it to avoid repeated generation':
        '留空则自动生成关联表的模型，若该表已有模型，建议选择好以免重复生成',
    'The field comment will be used as the CRUD dictionary, and will be identified as the field title before the colon, and as the data dictionary after the colon':
        '字段注释将作为 CRUD字典，冒号前将识别为字段标题，冒号后识别为数据字典',
    'Field name is invalid It starts with a letter or underscore and cannot contain any character other than letters, digits, or underscores':
        '字段名 {field} 不符合规范，请以 字母、_ 开头，不能出现 字母、数字、下划线 以外的字符',
}
