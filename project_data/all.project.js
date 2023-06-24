function custom(optOptions) {
    const Blockly = optOptions.Blockly;
    const pythonGenerator = optOptions.pythonGenerator;
    const Workspace = optOptions.Workspace;
    Workspace.updateToolbox(`<xml id="toolbox" style="display: none">
    <category name="Python基本语法" colour="#fd866e">
        <block type="ast_assert"></block>
        <block type="ast_assign"></block>
        <block type="ast_bool_op"></block>
        <block type="ast_break"></block>
        <block type="ast_compare"></block>
        <block type="ast_continue"></block>
        <block type="ast_expr"></block>
        <block type="ast_function_def"></block>
        <block type="ast_import"></block>
        <block type="ast_import"><mutation names="1" from="false"><regular name="false"></regular></mutation></block>
        <block type="ast_return_full"></block>
        <block type="ast_NameConstantNone"></block>
        <block type="ast_NameConstantBoolean"></block>
        <block type="ast_return"></block>
        <block type="ast_pass"></block>
        <block type="ast_try"></block>
        <block type="ast_unary_op_uadd"></block>
        <block type="ast_unary_op_usub"></block>
        <block type="ast_unary_op_not"></block>
        <block type="ast_unary_op_invert"></block>
        <block type="ast_while"><mutation or_else="false"></mutation></block>
        <block type="ast_while"><mutation or_else="true"></mutation></block>
        <block type="ast_with"></block>
        <block type="ast_with_with_item"></block>
        <block type="ast_with_with_item_as"></block>
    </category>
    <category name="专用-小海龟" colour="#fd866e">
        <block type="koch_line"></block>
        <block type="polygon"></block>
        <block type="pensanflower"></block>
        <block type="import_turtle"></block>
        <block type="turtle_move">
            <value name="steps">
                <shadow type="ast_number"></shadow>
            </value>
        </block>
        <block type="turtle_direction">
            <value name="angle">
                <shadow type="ast_number"></shadow>
            </value>
        </block>
        <block type="turtle_fill"></block>
        <block type="turtle_pen_operation"></block>
        <block type="turtle_visible"></block>
        <block type="pensize">
            <value name="size">
                <shadow type="ast_number"></shadow>
            </value>
        </block>
        <block type="seth">
            <value name="angle">
                <shadow type="ast_number"></shadow>
            </value>
        </block>
        <block type="turtle_setx">
            <value name="x">
                <shadow type="ast_number"></shadow>
            </value>
        </block>
        <block type="turtle_sety">
            <value name="y">
                <shadow type="ast_number"></shadow>
            </value>
        </block>
        <block type="setpos">
            <value name="x">
                <shadow type="ast_number"></shadow>
            </value>
            <value name="y">
                <shadow type="ast_number"></shadow>
            </value>
        </block>
        <block type="turtle_color">
            <value name="color">
                <shadow type="colour_picker"></shadow>
            </value>
        </block>
        <block type="turtle_fill_color">
            <value name="color">
                <shadow type="colour_picker"></shadow>
            </value>
        </block>
        <block type="turtle_circle">
            <value name="radius">
                <shadow type="ast_number"></shadow>
            </value>
            <value name="extent">
                <shadow type="ast_number"></shadow>
            </value>
        </block>
        <block type="turtle_polygon">
        <value name="radius">
            <shadow type="ast_number"></shadow>
        </value>
        <value name="extent">
            <shadow type="ast_number"></shadow>
        </value>
        <value name="steps">
            <shadow type="ast_number"></shadow>
        </value>
        </block>
        <block type="turtle_dot">
            <value name="diameter">
                <shadow type="ast_number"></shadow>
            </value>
            <value name="color">
                <shadow type="colour_picker"></shadow>
            </value>
        </block>
        <block type="turtle_speed">
            <value name="speed">
                <shadow type="ast_number"></shadow>
            </value>
        </block>
        <block type="turtle_write">
            <value name="arg">
                <shadow type="ast_str"></shadow>
            </value>
            <value name="size">
                <shadow type="ast_number"></shadow>
            </value>
        </block>
        <block type="turtle_shape">
            <value name="shape">
                <shadow type="ast_str"></shadow>
            </value>
        </block>
        <block type="turtle_home"></block>
        <block type="turtle_done"></block>
    </category>
    <category name="变量" colour="#fd866e" custom="VARIABLE"></category>
    <category name="函数" colour="#fd866e" custom="PROCEDURE"></category>
    <category name="输入输出" colour="#fd866e">
        <block type="input_with_info"></block>
        <block type="print"></block>
        <block type="print_end_with"></block>
        </category>
    <category name="字符串" colour="#fd866e">
        <block type="ast_str"></block>
        <block type="ast_str_char"></block>
        <block type="ast_str_multiline"></block>
        <block type="ast_text_join"></block>
        <block type="int"></block>
        <block type="str"></block>
    </category>
    <category name="数学" colour="#fd866e">
        <block type="ast_number"></block>
        <block type="ast_bin_op"></block>
        <block type="math_random_int"></block>
        <block type="math_modulo"></block>
    </category>
    <category name="属性" colour="#fd866e">
        <block type="id"></block>
        <block type="type"></block>
        <block type="get_id"></block>
        <block type="get_type"></block>
    </category>
    <category name="控制" colour="#fd866e">
        <block type="ast_controls_for"></block>
        <block type="controls_if"></block>
        <block type="controls_ifelse"></block>
        <block type="controls_repeat_ext"></block>
        <block type="controls_whileUntil"></block>
        <block type="controls_for"></block>
        <block type="controls_forEach"></block>
        <block type="controls_flow_statements"></block>
    </category>
    <category name="颜色" colour="#fd866e">
        <block type="colour_picker"></block>
        <block type="colour_random"></block>
        <block type="colour_rgb"></block>
        <block type="colour_blend"></block>
    </category>
    <category name="列表" colour="#fd866e">
        <block type="list_extend"></block>
        <block type="list_append"></block>
        <block type="list_clear"></block>
        <block type="lists_getIndex"></block>
        <block type="lists_setIndex"></block>
        <block type="lists_getSublist"></block>
        <block type="lists_sort"></block>
        <block type="lists_split"></block>
        <block type="ast_list"></block>
    </category>
    <category name="元组" colour="#fd866e">
        <block type="ast_tuple"></block>
        <block type="ast_tuple_section">
            <value name="begin">
                <shadow type="ast_number"></shadow>
            </value>
            <value name="end">
                <shadow type="ast_number"></shadow>
            </value>
            <value name="step">
                <shadow type="ast_number"></shadow>
            </value>
        </block>
        <block type="ast_tuple_visit">
            <value name="index">
                <shadow type="ast_number"></shadow>
            </value>
        </block>
    </category>
    <category name="集合" colour="#fd866e">
        <block type="set_option"></block>
        <block type="ast_set"></block>
    </category>
    <category name="字典" colour="#fd866e">
        <block type="dict_option"></block>
        <block type="ast_dict"></block>
        <block type="ast_dict_with_item"></block>
    </category>
    <category name="线性回归" colour="#ff5555">
        <block type="import_tf_module"></block>
        <block type="linear_regression_get_data"></block>
        <block type="linear_regression_show_data"></block>
        <block type="linear_regression_convert_to_tensor"></block>
        <block type="linear_regression_create_model">
            <value name="input_units">
                <shadow type="ast_number"></shadow>
            </value>
            <value name="input_useBias">
                <shadow type="ast_NameConstantBoolean"></shadow>
            </value>
            <value name="hidden_units">
                <shadow type="ast_number"></shadow>
            </value>
            <value name="hidden_useBias">
                <shadow type="ast_NameConstantBoolean"></shadow>
            </value>
        </block>
        <block type="linear_regression_model_summary"></block>
        <block type="linear_regression_train_model">
            <value name="batchSize">
                <shadow type="ast_number"></shadow>
            </value>
            <value name="epochs">
                <shadow type="ast_number"></shadow>
            </value>
        </block>
        <block type="linear_regression_test_model"></block>
    </category>
    <category name="手写体识别" colour="#ff5555">
        <block type="import_tf"></block>
        <block type="mnist_load_data"></block>
        <block type="mnist_show_data"></block>
        <block type="mnist_create_model">
            <value name="kernelSize">
                <shadow type="ast_number"></shadow>
            </value>
            <value name="filter">
                <shadow type="ast_number"></shadow>
            </value>
            <value name="strides">
                <shadow type="ast_number"></shadow>
            </value>
        </block>
        <block type="mnist_show_model_summary"></block>
        <block type="mnist_train_model">
            <value name="batch">
                <shadow type="ast_number"></shadow>
            </value>
            <value name="epochs">
                <shadow type="ast_number"></shadow>
            </value>
            <value name="trainDataSize">
                <shadow type="ast_number"></shadow>
            </value>
            <value name="testDataSize">
                <shadow type="ast_number"></shadow>
            </value>
        </block>
        <block type="mnist_model_evaluation">
            <value name="dataSize">
                <shadow type="ast_number"></shadow>
            </value>
        </block>
    </category>
    <category name="加法RNN" colour="#ff5555">
        <block type="rnn_import_tf"></block>
        <block type="rnn_get_data"></block>
        <block type="rnn_handle_data"></block>
        <block type="rnn_create_model">
            <value name="units">
                <shadow type="ast_number"></shadow>
            </value>
        </block>
        <block type="rnn_train_model">
            <value name="epochs">
                <shadow type="ast_number"></shadow>
            </value>
            <value name="batchSize">
                <shadow type="ast_number"></shadow>
            </value>
            <value name="testSampleNum">
                <shadow type="ast_number"></shadow>
            </value>
        </block>
    </category>
</xml>`);
}
