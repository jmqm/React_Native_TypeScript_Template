module.exports = {
    presets: [
        ['module:metro-react-native-babel-preset', { useTransformReactJSXExperimental: true }],
        '@babel/preset-typescript'
    ],
    plugins: [
        [
            // Prevents the requirement of importing React.
            // Requires the following preset with the option to work.
            // ['module:metro-react-native-babel-preset', { useTransformReactJSXExperimental: true }],
            '@babel/plugin-transform-react-jsx', {
                runtime: 'automatic'
            }
        ],
        [
            'module-resolver', {
                root: ['./'],
                extensions: ['.ts', '.tsx', '.js', '.jsx', '.json'],
                alias: { src: './src' }
            }
        ]
    ]
};
