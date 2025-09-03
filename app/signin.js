import { Link } from "expo-router";
import { StatusBar, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { TextInput } from "react-native-web";
import { colors } from "../theme/colors";

export default function Signin () {
    return (
        <View style={styles.wrapper}>
            {/* header group */}
            <View style={styles.header}>
                <Text style={styles.brandName}>Copreneur</Text>
                <Text style={styles.brandDesc}>Where entrepreneurs collaborate with developers</Text>
            </View>

            {/* body group */}
             <View style={styles.body}>
                <Text>Create account</Text>

                {/* create account with google */}
                <TouchableOpacity style={styles.signInBtn}>
                    <image
                    style={{
                        width: 36,
                        height: 36,
                    }}
                    source={require("../assets/images/google.png")}/>
                    <Text style={styles.signInText}>Google</Text>
                </TouchableOpacity>

                {/* OR */}
                <View style={styles.orsec}>
                    <View style={styles.line}></View>
                    <View style={styles.orText}OR></View>
                    <View style={styles.line}></View>
                </View>

                {/* create account with email and password */}
                <View>
                    <TextInput
                    keyboardType="email-address"
                    style={styles.input}
                    placeholder="e.g johndoe@gmail.com"/>
                    <TextInput
                    keyboardType="default"
                    style={styles.input}
                    placeholder="create password"/>
                </View>
             </View>

             
                {/* already have an account?*/}
                <View style={styles.already}>
                    <Text style={styles.alreadyText}>Already have an account</Text>
                    <Link href="/signin" style={styles.alreadyLink}>Go to sign in</Link>
                </View>
    


            {/* bottom group */}
             <View style={styles.footer}>
                <Link href="/about" style={styles.footerLink}>About copreneur</Link>
                <Link href="/about" style={styles.footerLink}>Abot copr</Link>
             </View>

        </View>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        display:"flex",
        justifyContent:"space-between",
        backgroundColor: colors.brown200,
        paddingTop: StatusBar.currentHeight,
        paddingBottom: 40
    },
    header: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        gap: 8
    },
    brandName: {
        fontSize: 46,
        fontWeight: "bold",
        color: colors.brown400
    },
    brandDesc: {
        fontWeight: "bold",
        color: colors.brown400,
        textAlign: "center"
    },
    body: {
        display: "flex",
        gap:18,
        paddingHorizontal: 40,
    },
    bodyText: {
        color: colors.brown400,
        fontSize: 18,
    },
    already: {
        display: "flex",
        flexDirection: "row",
        gap: 4
    },
    alreadyText: {
        color: colors.brown400,

    },
    alreadyLink: {
        color: colors.brown300,
        fontWeight: "bold",
    },
    signInBtn: {
        display:"flex",
        flexDirection:"row",
        justifyContent:"center",
        alignItems: "center",
        gap: 16,
        backgroundColor: colors.brown400,
        borderRadius:4
    },
    signInText: {
        color: colors.brown100,
        fontSize: 22
    },
    footer: {
        display:"flex",
        flexDirection:"row",
        justifyContent:"space-evenly"
    },
    footerLink: {
        color: colors.brown400,
        fontSize: 12,
    },
    orSec: {
        display: "flex",
        flexDirection: "row",
        justifyContent:"space-evenly",
        alignItems: "center"
    },
    orText: {
        fontSize: 16,
        color: colors.brown400
    },
    line: {
        width: "30%",
        borderTopWidth: 1,
        borderTopColor: colors.brown400,
    },
    emailSec: {
        gap: 8,
    },
    input: {
        borderWidth: 1,
        borderColor: colors.brown400,
        borderRadius:4,
        fontSize: 16,
        paddingHorizontal: 6,
    }
});