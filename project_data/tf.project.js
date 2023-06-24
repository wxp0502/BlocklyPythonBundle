function custom(optOptions) {
    const Blockly = optOptions.Blockly;
    const pythonGenerator = optOptions.pythonGenerator;
    const Workspace = optOptions.Workspace;

    Workspace.updateToolbox(`<xml id="toolbox" style="display: none">
    <category name="线性回归" colour="#fd866e">
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
    <category name="手写体识别" colour="#fd866e">
        <block type="mnist_predict"></block>
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
        <block type="tf_dataset_mnist_data_loader"></block>
    </category>
    <category name="加法RNN" colour="#fd866e">
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
        <block type="addition_rnn"></block>
    </category>
</xml>`);
}
