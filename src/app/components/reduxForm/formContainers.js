import React, { Fragment } from "react";

export const Container = (FormInput, addons = {}) => {
    const { PrefixAddon, PostFixAddon } = addons;
    return props => {
        const {
            label,
            prefixOnClick,
            postfixOnClick,
            meta: { touched, error, warning }
        } = props;

        const classes = touched && error ? "form-group has-error" : "form-group";
        const content =
            PrefixAddon || PostFixAddon ? (
                <div class="input-group">
                    {PrefixAddon && <PrefixAddon onClick={prefixOnClick} />}
                    <FormInput {...props} />
                    {PostFixAddon && <PostFixAddon onClick={postfixOnClick} />}
                </div>
            ) : (
                <FormInput {...props} />
            );

        return (
            <div class={classes}>
                <label class="control-label" htmlFor="name">
                    {label}
                </label>
                {content}
                {touched && ((error && <span class="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
            </div>
        );
    };
};

export const ContainerAddon = (label, className) => {
    return ({ onClick }) => (
        <span class="input-group-btn">
            <button class="btn btn-default" type="button" onClick={onClick}>
                <span class={className}>{label}</span>
            </button>
        </span>
    );
};
