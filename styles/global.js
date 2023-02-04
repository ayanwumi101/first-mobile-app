import {StyleSheet} from 'react-native'

export const globalStyles = StyleSheet.create({
  container: {
    paddingTop: 25,
    paddingHorizontal: 0,
    flex: 1,
    marginBottom: 10,
  },
  heading: {
    fontFamily: "Inter-Black",
    fontSize: 20,
    color: "#333",
    textAlign: "center",
    marginBottom: 15,
  },
  text: {
    fontFamily: "Inter-Regular",
    fontSize: 16,
    color: "#333",
    paddingHorizontal: 15,
    // textAlign: 'justify',
    marginBottom: 5,
    lineHeight: 25,
  },
  paragraph: {
    marginVertical: 8,
    lineHeight: 20,
  },
  button_container: {
    paddingHorizontal: 30,
    margin: "auto",
    marginTop: 20,
    fontFamily: "Inter-Black",
    textAlign: "center",
  },
  reviews_container: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 10,
    paddingVertical: 12,
    marginHorizontal: 13,
    borderRadius: 3,
    marginVertical: 13,
    backgroundColor: "#fff",
    borderWidth: 0.5,
    borderColor: "lightgrey",
    elevation: 5,
    shadowOffset: { width: 2, height: 2 },
    shadowColor: "#eee",
    shadowOpacity: 0.4,
  },
  bold: {
    fontWeight: "900",
  },
  modalContainer: {
    marginVertical: 15,
  },
  modalText: {
    textAlign: "center",
    fontSize: 18,
    fontFamily: "Inter-Regular",
  },
  modalConrent: {},
  toggleIcon: {
    marginBottom: 10,
    borderWidth: 1,
    borderColor: "lightgrey",
    padding: 10,
    borderRadius: 10,
    alignSelf: "center",
  },
  closeIcon: {
    marginTop: 20,
    marginBottom: 20,
  },
});